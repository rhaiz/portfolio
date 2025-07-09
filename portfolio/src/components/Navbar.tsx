'use client';

import Link from 'next/link';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { useTheme } from '@/app/context/themeContext';

const Navbar = () => {
    const {theme, toggleTheme} = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathName = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    // const Languages = ['en', 'pt', 'es'];
    // const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
    // let menuItems
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Experience', href: '/experience' },
        { name: 'Education', href: '/education' },
        { name: 'Skills', href: '/skills' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'Projects', href: '/projects' },
        { name: 'Courses', href: '/courses' },
    ];
    return (
        <nav className='fixed w-full bg-neutral-200/80 dark:bg-neutral-800/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 transition-colors shadow-sm'>
            <div className='container max-w-9xl mx-auto px-4'>
                {/* Desktop menu */}
                <div className='flex items-center justify-between h-16'>
                    <Link href='/' className='text-xl font-bold text-emerald-800 dark:text-emerald-300'>Rhaiz&trade;</Link>


                    <div className='hidden md:flex items-center space-x-8'>
                        {
                            menuItems.map((item) => {
                                const isActive = pathName === item.href;
                                return (

                                    <Link key={item.href} href={item.href} className={`hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors font-medium ${isActive ? 'font-semibold text-emerald-800 dark:text-emerald-300' : ''}`}>
                                        {item.name}
                                    </Link>

                                )
                            })
                        }
                        <button onClick={toggleTheme} className='p-2 rounded-lg hover:bg-gray-200 text-black dark:hover:bg-gray-700 transition-colors cursor-pointer'>
                            {
                                theme === 'dark' ? (
                                    <SunIcon className='w-5 h-5 text-emerald-300'/>
                                ) : (
                                    <MoonIcon className='w-5 h-5 text-emerald-800'/>
                                )
                            }
                        </button>
                    </div>
                    {/* Mobile menu button */}
                            <button 
                            className='md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer' onClick={toggleMobileMenu}>
                                {
                                    isMobileMenuOpen ? (
                                        <XMarkIcon className='w-6 h-6' onClick={toggleMobileMenu} />
                                    ) : (
                                        <Bars3Icon className='w-6 h-6' onClick={toggleMobileMenu} />
                                    )
                                }
                            </button>
                    </div>
                {/* Mobile menu */}
                {
                    isMobileMenuOpen && (
                        <div className='md:hidden'>
                            <div className='py-4 space-y-4'>
                                {
                                    menuItems.map((item, index) => (
                                        <div key={index} onClick={toggleMobileMenu} >
                                            <Link href={item.href} className={`block py-2 hover:text-white transition-colors ${pathName === item.href ? 'font-semibold text-emerald-800 dark:text-emerald-300' : ''}`}>
                                                {item.name}
                                            </Link>
                                        </div>
                                    ))
                                }
                            <div>
                            <button 
                            onClick={toggleTheme}
                            className='flex items-center py-2 dark:text-emerald-300 text-emerald-800 transition-colors'>
                                {
                                    theme === 'dark' ? (
                                        <><SunIcon className='w-6 h-6 mr-2'/> Light Mode</>
                                    ) : (
                                        <><MoonIcon className='w-6 h-6 mr-2'/> Dark Mode</>
                                    )
                            }
                            

                            </button>
                            </div></div>
                            </div>
                        )
                }
            </div>
        </nav>
    )
}

export default Navbar