"use client";
import { useEffect, useState } from "react";

export default function EyesComp() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const pupilX = (pos.x / window.innerWidth - 0.5) * 30;
  const pupilY = (pos.y / window.innerHeight - 0.5) * 30;

  return (
    <div className="absolute bottom-0 left-0 w-50 h-50 flex items-center justify-center">
      {[0,1].map(i => 
        <div key={i} className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <div
                className="w-12 h-12 bg-black rounded-full transition-all duration-75"
                style={{
                    transform: `translate(${pupilX}px, ${pupilY}px)`,
                }}
            />
        </div>)}
    </div>
  );
}
