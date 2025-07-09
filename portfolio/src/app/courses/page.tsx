'use client';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { FaCalendar } from 'react-icons/fa';
import Link from 'next/link'
import { courses } from '@/contents/courses';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { mainMotion } from '@/utils/animations';


const CoursesPage = () => {
    return (
        <section className='py-30 container max-w-7xl mx-auto px-4'>
            <h2 className='text-4xl text-center font-bold text-emerald-800 dark:text-emerald-300 mb-12'>Foundational Courses</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    courses.slice(0, 6).map((course) => (
                        <motion.article 
                        {...mainMotion} transition={{ duration: 0.2 }}
                        key={course.title} className='bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 mb-6'>
                            {/* Completition Date and Certificate Link */}
                            <div className='flex items-center justify-between mb-2'>
                                <span className='flex items-center gap-2 text-sm text-neutral-500'>
                                    <FaCalendar className='mr-2' />
                                    {new Date(course.completitionDate).toLocaleDateString()}
                                </span>
                                <motion.a
                                    whileHover={{ x: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={course.certificateLink} target='_blank' className='flex items-center gap-2 text-secondary hover:text-emerald-800 hover:dark:text-emerald-300 transiction-colors'>
                                    <FaExternalLinkAlt className='w-4 h-4' /> <span className='text-sm'> View Certificate </span>
                                </motion.a>

                            </div>

                            {/* Course Title */}
                            <h3 className='text-xl font-semibold mb-2'>{course.title}</h3>

                            {/* Course Description */}
                            <p className='text-neutral-500 mb-4'>{course.description}</p>

                            {/* Project Technologies */}
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {
                                    course.technologies.map((tech) => (
                                        <motion.span
                                            key={tech}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className='bg-emerald-500/10 dark:bg-emerald-300/10 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold'>{tech}</motion.span>
                                    ))
                                }
                            </div>
                        </motion.article>
                    ))}
            </div>
            <Link href='/courses_history' className='flex items-center gap-2 hover:text-neutral-500 text-emerald-800 dark:text-emerald-300 transition-colors duration-300 font-semibold'>
                <span className='text-sm'>View Full Courses History</span>
                <FaArrowRightFromBracket />
            </Link>
        </section>
    )
}

export default CoursesPage;