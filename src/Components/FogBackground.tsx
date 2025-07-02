import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type VantaEffectType = {
  destroy: () => void;
};

const FogBackground = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffectType | null>(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA?.FOG && vantaRef.current) {
      const effect = window.VANTA.FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xee00ff,
        midtoneColor: 0xa43328,
        lowlightColor: 0xde628d,
        baseColor: 0xffebeb,
        blurFactor: 0.6,
        speed: 2.0,
        zoom: 2.0,
      });
      setVantaEffect(effect);
    }

    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0 -z-10 w-full h-full opacity-[10%] " />;
};

export default FogBackground;
