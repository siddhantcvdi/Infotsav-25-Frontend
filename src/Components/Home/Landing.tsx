import { useEffect, useRef } from 'react';
import ParticlesBackground from '../ParticlesBackground';
import { gsap } from 'gsap';
import Infotsav2025LandingPage from '../../assets/2025/LandingPage/Infotsav2025LandingPage4.png';

const Landing: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const imgRef    = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance: fade & slight pop
      gsap.from(imgRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: 'back.out(1.7)'
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const onMouseEnter = () => {
    if (!imgRef.current) return;
    gsap.to(imgRef.current, {
      rotateY: 8,
      rotateX: 4,
      duration: 0.4,
      ease: 'power2.out'
    });
  };
  const onMouseLeave = () => {
    if (!imgRef.current) return;
    gsap.to(imgRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  return (
    <div
      ref={container}
      className="w-full h-screen bg-black flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      <ParticlesBackground />

      <img
        ref={imgRef}
        src={Infotsav2025LandingPage}
        alt="Infotsav 2025"
        className="neon-img cursor-default z-50"
        style={{
          width: '400px',       // <- increased from 320px to 400px
          maxWidth: '90vw',     // still responsive
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

export default Landing;
