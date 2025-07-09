'use client';
import React from "react";
import { skills } from "@/contents/skills";

import { motion } from 'framer-motion';
import { mainMotion } from '@/utils/animations';


const SkillsPage = () => {
    return (
        <section className='py-30 container max-w-6xl mx-auto px-8'>
            <h2 className='text-4xl text-center font-bold text-emerald-800 dark:text-emerald-300 mb-12'>Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    skills.map((skill) => (
                        <motion.article
                            key={skill.title}
                            className='border rounded-none border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6'
                            {...mainMotion} transition={{ duration: 0.2 }}
                        >
                            <motion.div className='mb-4'
                                whileHover={{ scale: 1.06 }}
                                transition={{ type: "spring", stiffness: 300 }}>
                                <skill.icon className='w-10 h-10 md:w-15 md:h-15 text-emerald-800 dark:text-emerald-300' />
                                <h3 className='text-xl md:text-2xl mt-2 font-semibold text-emerald-800 dark:text-emerald-300'>{skill.title}</h3>
                            </motion.div>
                            <p className='text-neutral-600 dark:text-neutral-400'>{skill.description}</p>
                        </motion.article>))
                }
            </div>
        </section>

    )
}

export default SkillsPage;