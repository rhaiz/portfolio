'use client';
import { experiences } from '@/contents/experiences';
import { fadeInUp } from '@/utils/animations';

import { motion } from 'framer-motion';


const ExperiencePage = () => {
    return (

        <motion.section
            {...fadeInUp}
            className='pt-30 pb-15 container max-w-5xl mx-auto px-4'>
            <h2 className='text-4xl text-center font-bold text-emerald-800 dark:text-emerald-300 mb-12'>Experience</h2>
            <div>
                <ol className='relative border-s border-neutral-300 dark:border-neutral-700'>


                    {
                        experiences.map((experience, index) => (
                            <li key={index} className='mb-10 ms-6'>
                                {/* Icon */}
                                <span className='absolute flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full -start-3 ring-8 ring-white dark:ring-neutral-800 dark:bg-emerald-900'>
                                    <svg className='w-2.5 h-2.5 text-emerald-800 dark:text-emerald-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                                        <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                                    </svg>
                                </span>
                                {/* Experience Title */}
                                <motion.h3
                                    whileHover={{ x: 2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`flex items-center mb-1 text-lg font-semibold ${index === 0 ? 'text-emerald-800 dark:text-emerald-300' : ''}`}>
                                    {experience.title} • {experience.company}
                                </motion.h3>
                                <div className='flex gap-4 mb-2 items-center justify-between text-sm text-neutral-500'>
                                    <p>{experience.format}</p>
                                    <p>{experience.period}</p>
                                </div>
                                <ul className='mt-4'>
                                    {experience.topics_covered.length > 0 &&
                                        experience.topics_covered.map((topic, idx) => (
                                            <motion.li
                                                whileHover={{ x: 2 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                key={idx} className='list-disc list-inside mt-2'>
                                                {topic}
                                            </motion.li>
                                        ))}
                                </ul>
                            </li>
                        ))
                    }
                </ol>
            </div>

        </motion.section>
    )
}

export default ExperiencePage;