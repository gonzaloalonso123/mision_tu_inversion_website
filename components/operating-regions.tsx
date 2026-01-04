"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

interface Region {
    name: string
    country: string
    flagPath: string
}

const regions: Region[] = [
    {
        name: "República Dominicana",
        country: "Caribe",
        flagPath: "/flags/4x3/do.svg",
    },
    {
        name: "Paraguay",
        country: "Sudamérica",
        flagPath: "/flags/4x3/py.svg",
    },
    {
        name: "España",
        country: "Europa",
        flagPath: "/flags/4x3/es.svg",
    },
    {
        name: "Marruecos",
        country: "Norte de África",
        flagPath: "/flags/4x3/ma.svg",
    },
]

export function OperatingRegions() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
                <Card
                    key={region.name}
                    className="text-center py-0 gap-0 rounded-lg shadow-sm hover:shadow-[0_0_20px_rgba(249,226,128,0.3)] hover:border-primary/50 transition-all duration-300 group"
                >
                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src={region.flagPath}
                            alt={`${region.name} flag`}
                            fill
                            className="object-contain rounded-t-md"
                        />
                    </div>
                    <h3 className="font-serif py-2 text-xl mb-1 group-hover:text-primary transition-colors">{region.name}</h3>
                </Card>
            ))}
        </div>
    )
}
