"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
    scene: string;
    className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <div className={className}>
            <Suspense
                fallback={
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                }
            >
                <Spline
                    scene={scene}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Suspense>
        </div>
    );
}
