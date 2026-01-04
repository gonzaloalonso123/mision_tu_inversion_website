"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Email inválido"),
    phone: z.string().optional(),
    service: z.string().min(1, "Selecciona un servicio"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        message: formData.get("message"),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Por favor revisa los campos del formulario",
        }
    }

    const { name, email, phone, service, message } = validatedFields.data

    try {
        const data = await resend.emails.send({
            from: "Misión Tu Inversión <onboarding@resend.dev>",
            to: "misiontuinversion@gmail.com",
            replyTo: email,
            subject: `Nuevo mensaje de contacto: ${service}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Nuevo mensaje de contacto</title>
            <style>
              body { font-family: sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px; }
              .header { background-color: #000; color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { padding: 30px; background-color: #fff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #666; font-size: 0.9em; text-transform: uppercase; margin-bottom: 5px; }
              .value { font-size: 1.1em; }
              .message-box { background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin:0; font-size: 24px;">Nuevo Contacto</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nombre</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>

                <div class="field">
                  <div class="label">Teléfono</div>
                  <div class="value">${phone || "No proporcionado"}</div>
                </div>

                <div class="field">
                  <div class="label">Servicio de Interés</div>
                  <div class="value">${service}</div>
                </div>

                <div class="field">
                  <div class="label">Mensaje</div>
                  <div class="value message-box">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
        })

        return {
            success: true,
            message: "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
        }
    } catch (error) {
        console.error("Error sending email:", error)
        return {
            success: false,
            message: "Hubo un error al enviar el mensaje. Por favor intenta de nuevo.",
        }
    }
}
