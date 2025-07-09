'use client';

import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=' bg-neutral-200 dark:bg-neutral-800/50'>
            <div className='container max-w-7xl mx-auto px-4 py-8'>
                {/* Footer Infos */}
                <div className='flex flex-col md:flex-row items-center justify-between border-b border-neutral-400 dark:border-neutral-700 pb-4'>

                    {/* Logo and Copyright */}
                    <div className='mb-4 md:mb-0'>
                        <Link href='/' className='text-xl font-bold text-emerald-800 dark:text-emerald-300'>Rhaiz&trade;</Link>
                        <p className='text-sm text-neutral-500 mt-2'>
                            © {new Date().getFullYear()} Rhaiz. All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className='flex space-x-6'>
                        <Link href='https://www.linkedin.com/in/rhaissa-zeferino/' target='_blank' className='text-2xl text-neutral-600 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors duration-300'>
                            <FaLinkedin />
                        </Link>
                        <Link href='https://github.com/rhaiz' target='_blank' className='text-2xl text-neutral-600 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors duration-300'>
                            <FaGithub />
                        </Link>
                        <Link href='mailto:rhaissazeferino@gmail.com' target='_blank' className='text-2xl text-neutral-600 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors duration-300'>
                            <FaEnvelope />
                        </Link>
                    </div>
                </div>

                {/* Built with */}
                <div className='flex flex-col items-center text-neutral-500 text-sm pt-4'>
                    <p>
                        Built with <span className='text-emerald-800 dark:text-emerald-300 font-semibold'>Next.js</span> and <span className='text-emerald-800 dark:text-emerald-300 font-semibold'>Tailwind CSS</span>
                    </p>
                    <p>
                        Illustrations by <a href='https://storyset.com/' target='_blank' rel='noopener noreferrer'>Storyset</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer