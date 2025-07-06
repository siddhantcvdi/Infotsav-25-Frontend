import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import { Stars } from "@react-three/drei";
import FogBackground from './Components/FogBackground';
import { ReactLenis } from 'lenis/react';
import Lenis from 'lenis';
import { useEffect } from 'react';

const MainLayout = () => {
    const location = useLocation();
    const hideFooter = location.pathname === '/contact';
    const isHomePage = location.pathname === '/' || location.pathname === '/about';

    useEffect(() => {
        if (isHomePage) {
            const lenis = new Lenis({
                lerp: 0.04,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
            window._lenix = lenis;

            lenis.on('scroll', () => {
                document.documentElement.style.scrollBehavior = 'auto';
                window.scrollTo(0, Math.round(lenis.scroll));
            });

            return () => {
                lenis.destroy();
                window._lenix = undefined;
            };
        }
    }, [location.pathname]);

    return (
        <div className='overflow-hidden'>
            <div className="fixed inset-0 -z-20">
                <Canvas>
                <Stars radius={100} count={3500} factor={4} fade speed={1} depth={150}/>
                </Canvas>
            </div>
            <FogBackground />

            <Navbar />
            <main className="min-h-screen flex flex-col">
                {isHomePage ? (
                    <ReactLenis root options={{ lerp: 0.04 }}>
                        <div className="flex-grow">
                            <Outlet />
                        </div>
                    </ReactLenis>
                ) : (
                    <div className="flex-grow">
                        <Outlet />
                    </div>
                )}
            </main>
            {!hideFooter && <Footer />}
        </div>
    );
};

export default MainLayout;
