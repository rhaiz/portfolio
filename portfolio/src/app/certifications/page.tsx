'use client';
import { certifications } from '@/contents/certifications';
import { FaCalendar } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';

import { motion } from 'framer-motion';
import { mainMotion } from '@/utils/animations';


const CertificationsPage = () => {
    return (
        <section className='py-30 container max-w-5xl mx-auto px-4'>
            <h2 className='text-4xl text-center font-bold text-emerald-800 dark:text-emerald-300 mb-12'>Certifications</h2>
            <div className='grid grid-cols-1 gap-8'>
                {
                    certifications.map((certification) => (
                        <motion.article
                            {...mainMotion} transition={{ duration: 0.2 }}
                            key={certification.title} className='bg-white grid grid-cols-1 md:grid-cols-[auto_1fr] dark:bg-neutral-800 rounded-lg shadow-md p-6'>

                            {/* Image Link */}
                            <div className='relative aspect-square w-48 md:w-64 m-2 rounded-lg overflow-hidden'>
                                <Image
                                    src={certification.imageLink} alt={certification.title} className='object-cover' width={500} height={500} />
                            </div>



                            <div className='flex flex-col justify-center p-6'>
                                {/* Certification Title */}
                                <h3 className='text-xl font-semibold mb-2 text-emerald-800 dark:text-emerald-300'>{certification.title}</h3>
                                {/* Certification Description */}
                                <p className='text-neutral-500 mb-4'>{certification.description}</p>
                                {/* Certification Date */}
                                <span className='flex items-center gap-2 mb-4 text-neutral-500'>
                                    <FaCalendar className='mr-2' />
                                    {new Date(certification.aquiredDate).toLocaleDateString()}
                                </span>
                            </div>
                        </motion.article>))
                }
            </div>
        </section>
    )
}

export default CertificationsPage;