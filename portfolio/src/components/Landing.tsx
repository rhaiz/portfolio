'use client';
import React from 'react';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

const Landing = () => {
    return (
        <section className=' px-14 w-full min-h-screen pt-34 pb-0'>
            <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
                <h1 className='text-7xl xl:text-[14rem] 2xl:text-[16rem] font-bold mb-6 text-emerald-800 dark:text-emerald-300'>Hello,</h1>
                <h2 className='text-4xl xl:text-7xl 2xl:text-8xl font-bold mb-7 text-emerald-800 dark:text-emerald-300'>welcome to my world</h2>
                <p className='max-w-2xl font-bold mb-6'>My name is Rhaissa Zeferino and this is my portfolio site, feel free to explore and learn more about me and my work. I hope you enjoy it!</p>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href='/projects' className='inline-block px-8 py-3 rounded-lg trasition-colors border-2 border-emerald-800 dark:border-emerald-300 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-800/60 font-semibold'>Check my projects here!</motion.a>
            </motion.div>
        </section>
    )
}

export default Landing;