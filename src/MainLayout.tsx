// import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import { Stars } from "@react-three/drei";
import FogBackground from './Components/FogBackground';

const MainLayout = () => {

    return (
        
        <div className='overflow-hidden'>
            <div className="fixed inset-0 -z-20">
                <Canvas>
                <Stars radius={100} count={3500} factor={4} fade speed={1} depth={150}/>
                </Canvas>
            </div>
            <FogBackground />

            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
