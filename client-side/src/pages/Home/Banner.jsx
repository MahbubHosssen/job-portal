import React from 'react';
import { motion } from 'motion/react';
import team1 from '../../assets/bannerImg/corporate.jpg'
import team2 from '../../assets/bannerImg/group-people.jpg'

const Banner = () => {


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 flex flex-col justify-between'>
                    <motion.img
                        animate={{y: [0, 30, 0]}}
                        transition={{duration: 7, repeat: Infinity}}
                        src={team1}
                        className='border-l-[6px] border-b-[6px] border-blue-500 rounded-t-[40px] rounded-br-[40px] w-64 h-[250px]'
                        alt="" />
                    <motion.img
                        animate={{x: [170, 120, 170]}}
                        transition={{duration: 10, repeat: Infinity}}
                        src={team2}
                        className='border-l-[6px] border-b-[6px] border-blue-500 rounded-t-[40px] rounded-br-[30px] w-72 mt-[-70px]'
                        alt="" />
                </div>
                <div className='flex-1 text-left'>
                    <motion.div
                        initial={{ y: 30 }}
                        animate={{ y: -30 }}
                        transition={{ duration: 1 }}
                    >

                        <h1

                            className="text-4xl font-bold">The <motion.span
                                animate={{ color: ['#1463b8', '#27b3b3'] }}
                                transition={{ duration: 1.5 }}

                            >Easiest Way</motion.span> <br /> to Get Your New Job
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>

                    </motion.div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;