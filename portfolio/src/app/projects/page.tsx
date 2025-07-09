'use client'
import { projects } from '@/contents/projects'
import React from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { motion } from 'framer-motion';
import { mainMotion } from '@/utils/animations';


const ProjectsPage = () => {
    return (
        <section className='py-30 container max-w-7xl mx-auto px-4'>
            <h2 className='text-4xl text-center font-bold text-emerald-800 dark:text-emerald-300 mb-12'>Featured Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    /* Here you can map through your projects and display them */
                    projects.map((project) => (
                        <motion.article key={project.title}
                            {...mainMotion} transition={{ duration: 0.2 }}

                            className='bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6'>
                            {/* Project Links */}
                            <div className='flex gap-4 mb-2 items-center justify-between'>
                                <motion.a
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.githubLink} target='_blank' className='flex items-center gap-2 text-secondary hover:text-emerald-800 hover:dark:text-emerald-300 transiction-colors'>
                                    <FaGithub className='w-5 h-5' /> <span className='text-sm'>View on GitHub</span>
                                </motion.a>
                                {
                                    project.demoLink && (
                                        <motion.a
                                            whileHover={{ x: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.demoLink} target='_blank' className='flex items-center gap-2 text-secondary hover:text-emerald-800 hover:dark:text-emerald-300 transiction-colors'>
                                            <FaExternalLinkAlt className='w-4 h-4' /> <span className='text-sm'> View Live Demo </span>
                                        </motion.a>)}
                            </div>

                            {/* Image Link */}
                            <motion.div className='relative aspect-video mb-4 rounded-lg overflow-hidden'
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}>
                                <Image src={project.imageLink} alt={project.title} fill className='object-cover' sizes='(max-width: 768px) 100vw, (max-width:1200px),50vw, 33vw' />
                            </motion.div>

                            {/* Project Title */}
                            <motion.h3
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className='text-xl font-semibold mb-2'>{project.title}</motion.h3>

                            {/* Project Description */}
                            <p className='text-neutral-500 mb-4'>{project.description}</p>

                            {/* Project Technologies */}
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {
                                    project.technologies.map((tech) => (
                                        <motion.span
                                            key={tech}
                                            className='bg-emerald-500/10 dark:bg-emerald-300/10 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold'
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}>
                                            {tech}</motion.span>
                                    ))
                                }
                            </div>
                        </motion.article>
                    ))
                }
            </div>
        </section>
    )
}

export default ProjectsPage;