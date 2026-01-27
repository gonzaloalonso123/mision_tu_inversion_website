'use client';

import createGlobe from "cobe";
import { useEffect, useRef, useState, useCallback } from "react";

export default function OperatingInTheWorld() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(400);

    const updateSize = useCallback(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            // Calculate size based on container width with max of 600px
            const newSize = Math.min(containerWidth - 32, 600);
            setSize(Math.max(newSize, 280)); // Minimum size of 280px
        }
    }, []);

    useEffect(() => {
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [updateSize]);

    useEffect(() => {
        if (!canvasRef.current) return;

        let phi = 0;
        const dpr = Math.min(window.devicePixelRatio, 2);

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: dpr,
            width: size * dpr,
            height: size * dpr,
            phi: 0,
            theta: 0,
            dark: 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.8, 0.8, 0.8],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            }
        });

        return () => {
            globe.destroy();
        };
    }, [size]);

    return (
        <div
            ref={containerRef}
            className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 overflow-hidden"
        >
            <div
                className="relative flex items-center justify-center"
                style={{ width: size, height: size }}
            >
                <canvas
                    ref={canvasRef}
                    style={{
                        width: size,
                        height: size,
                        display: 'block'
                    }}
                    className="touch-none"
                />
            </div>
        </div>
    );
}
