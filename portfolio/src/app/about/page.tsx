'use client';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { motion } from 'framer-motion';
import { mainMotion } from '@/utils/animations';

const AboutPage = () => {
    return (
        <section className='flex items-center justify-center min-h-screen'>
            <motion.div
                {...mainMotion} transition={{ duration: 0.2 }}
                className='container max-w-6xl bg-white dark:bg-neutral-800 p-20 px-4 m-2'>

                {/* Title */}
                <h2 className='text-4xl font-bold text-emerald-800 dark:text-emerald-300'>
                    Rhaissa Zeferino</h2>
                {/* Sutbtitle */}
                <h3 className='my-2 max-w-2xl text-neutral-500 font-semibold flex justif-center items-center'>
                    Software Engineer   &#9673;  Hortolândia, SP - Brazil  &#9673;  rhaissazeferino@gmail.com</h3>
                {/* Description */}
                <p className='mb-8'>
                    I am a software engineer with a passion for creating innovative solutions. I have experience in both frontend and backend development, and I am always eager to learn new technologies and improve my skills.
                </p>
                {/* Social links */}
                <div className='flex justif-center space-x-4 mb-8'>
                    <Link href='https://www.linkedin.com/in/rhaissa-zeferino/' target='_blank' className='text-5xl hover:text-neutral-600 text-emerald-800 dark:text-emerald-300 transition-colors duration-300'>
                        <FaLinkedin />
                    </Link>
                    <Link href='https://github.com/rhaiz' target='_blank' className='text-5xl hover:text-neutral-600 text-emerald-800 dark:text-emerald-300 transition-colors duration-300'>
                        <FaGithub />
                    </Link>
                    <Link href='mailto:rhaissazeferino@gmail.com' target='_blank' className='text-5xl hover:text-neutral-600 text-emerald-800 dark:text-emerald-300 transition-colors duration-300'>
                        <FaEnvelope />
                    </Link>
                </div>
                {/* Resume link */}
                <motion.a
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href='/Resume_Rhaissa_Zeferino_En.pdf' target='_blank' className='flex items-center gap-2 hover:text-neutral-600 text-emerald-800 dark:text-emerald-300 transition-colors duration-300 font-semibold'>
                    <span>View Full Resume</span>
                    <FaArrowUpRightFromSquare />
                </motion.a>
            </motion.div>
        </section>
    )
}

export default AboutPage;