'use client';
import React from 'react';
import { education } from '@/contents/educations';

import { motion } from 'framer-motion';
import { mainMotion } from '@/utils/animations';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';
import EducationPathSVG from '@/svgs/EducationPathSVG';


const EducationPage = () => {
    const startYear = 2018;
    const currentYear = new Date().getFullYear();
    const yearsOfJourney = currentYear - startYear;
    return (
        <section className='py-30 container max-w-7xl mx-auto px-4'>
            <h2 className='text-4xl text-center font-bold text-emerald-800 dark:text-emerald-300 mb-12'>Education</h2>
            <h3 className='text-xl font-semibold mb-2 text-center'>My Tech Journey started {yearsOfJourney} years ago...</h3>
            {/* Desktop Timeline */}
            <div className="relative w-full h-full overflow-hidden hidden md:block">
                {/* Background SVG */}
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2400 2600"
                    className="absolute inset-0 m-auto w-full max-w-[2400px] h-auto aspect-[2400/2600] -z-10"
                >
                    <path
                        d="M1300,0s-15,42-151,42-141,224,0,224,141,227,0,227-161,217,0,217,133,67,0,67-101,60,0,60"
                        transform="translate(0, 950)"
                        stroke="#059669"
                        strokeWidth="4"
                        fill="none"
                    />
                </svg> */}
                <div className='hidden lg:block ml-30 w-240 absolute inset-0 top-0 left-0 -z-10 pointer-events-none'>
                    <EducationPathSVG />
                </div>    
                <div className='hidden md:block pt-5 m-12 pb-60'>

                    {/* Desktop Timeline */}
                    {
                        education.map((item, index) => (
                            <div
                                key={item.institution}
                                className={`flex flex-col md:flex-row items-center md:odd:flex-row-reverse gap-4 mb-8 items-center justify-between
                                }`}
                            >
                                {/* Ícone */}
                                <motion.div
                                    {...mainMotion} transition={{ duration: 0.2 }}
                                    className='md:w-1/2 flex justify-center mb-6 sm:mb-0'>
                                    <div className='bg-emerald-800/70 dark:bg-emerald-300/10 p-6 rounded-full w-1000'>
                                        <item.SVGComponent />
                                    </div>
                                </motion.div>


                                {/* Conteúdo */}
                                <motion.div
                                    {...mainMotion} transition={{ duration: 0.2 }}
                                    className={`bg-neutral-100 transition-colors dark:bg-neutral-900 md:w-1/2 max-w-md ${index % 2 === 0
                                        ? 'md:text-left md:items-start'
                                        : 'md:text-right md:items-end'
                                        }`}
                                >
                                    <h3 className='text-2xl font-bold mb-2 text-emerald-800 dark:text-emerald-300'>{item.title} • <span className='font-normal text-neutral-600 dark:text-neutral-400'>{item.institution} </span>
                                    </h3>
                                    <div className='flex gap-4 mb-2 items-center justify-between text-sm text-neutral-500 mx-2'>
                                        <span className='flex items-center gap-2'><IoInformationCircleOutline /> {item.format}</span>
                                        <span className='flex items-center gap-2'><FaCalendarAlt />{item.period}</span>
                                    </div>
                                    <p className='leading-relaxed'>{item.description}</p>
                                    <ul className='mt-4 space-y-2 list-inside'>
                                        {item.topics_covered.length > 0 &&
                                            item.topics_covered.map((topic, idx) => (
                                                <motion.li
                                                    whileHover={{ x: 2 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                    key={idx} className='gap-2 text-neutral-600 dark:text-neutral-400'>
                                                    <span className='inline-block shrink-0 mt-2 mr-1 w-2 h-2 bg-emerald-800 dark:bg-emerald-300 rounded-full'></span>
                                                    <span>{topic}</span>
                                                </motion.li>
                                            ))}
                                    </ul>
                                </motion.div>
                            </div>
                        ))}
                </div>
            </div>




            {/* Mobile Timeline */}
            <div className='md:hidden'>
                {education.map((item) => (
                    <div
                        key={item.institution}
                        className={`flex flex-col items-center gap-4 mb-8`}
                    >
                        {/* Ícone */}
                        <div className='flex justify-center mb-6'>
                            <div className='bg-emerald-800/70 dark:bg-emerald-300/10 p-6 rounded-full w-50 sm:w-100'>
                                <item.SVGComponent />
                            </div>
                        </div>

                        {/* Conteúdo */}
                        <div className={`max-w-md text-center`}>
                            <h3 className='text-2xl font-bold mb-2 text-emerald-800 dark:text-emerald-300'>{item.title} • <span className='font-normal text-neutral-600 dark:text-neutral-400'>{item.institution} </span>
                            </h3>
                            <div className='flex gap-4 mb-2 items-center justify-between text-sm text-neutral-500 mx-2'>
                                <span className='flex items-center gap-2'><IoInformationCircleOutline /> {item.format}</span>
                                <span className='flex items-center gap-2'><FaCalendarAlt />{item.period}</span>
                            </div>
                            <p className='leading-relaxed'>{item.description}</p>
                            <ul className='mt-4'>
                                {item.topics_covered.length > 0 &&
                                    item.topics_covered.map((topic, idx) => (
                                        <li key={idx} className='gap-2 text-neutral-600 dark:text-neutral-400'>
                                            <span className='inline-block shrink-0 mt-2 mr-1 w-2 h-2 bg-emerald-800 dark:bg-emerald-300 rounded-full'></span>
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default EducationPage;