import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltCard() {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.05,
      });
    }

    // Cleanup function
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className="w-64 h-64 bg-white rounded-xl shadow-lg transition-transform duration-300 ease-out transform-gpu"
    >
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">Tilt Card</h2>
        <p className="text-gray-600 mt-2">
          Using vanilla-tilt with Tailwind CSS
        </p>
      </div>
    </div>
  );
}
