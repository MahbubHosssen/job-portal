import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/sharedComponent/Navbar';
import Footer from '../pages/sharedComponent/Footer';
import { motion, useScroll } from "framer-motion";
import './main.css'
const MainLayout = () => {

    const { scrollYProgress } = useScroll()

    return (
        <div className=''>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='w-full bg-[#3C3D3F]'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;