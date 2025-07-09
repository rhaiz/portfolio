import { courses } from '@/contents/courses';
import Link from 'next/link';
import { FaCalendar } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const CoursesHistoryPage = () => {
    const getText = (link = '') => {
        const match = link.match(/^https:\/\/([^ ]*?\.com)/);
        return match ? match[1] : 'view certificate';
    };
    return (

        <section className='py-23 container max-w-7xl mx-auto px-4'>
            {/* Manual Breadcrumb */}
            <nav className='mb-2 font-semibold'>
                <ol className='list-reset flex text-sm text-neutral-500'>
                    <li>
                        <Link href='/' className='hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors'>Home</Link>
                    </li>
                    <li className='mx-2'>/</li>
                    <li>
                        <Link href='/courses' className='hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors'>Courses</Link>
                    </li>
                    <li className='mx-2'>/</li>
                    <li className='text-emerald-800 dark:text-emerald-300'>Courses History</li>
                </ol></nav>

            <h2 className='text-4xl text-center font-bold text-emerald-800 dark:text-emerald-300 mb-12'>Courses History</h2>

            {/* Desktop table */}
            <table className='hidden md:table min-w-full rounded-lg shadow-md '>
                <thead className='border-b border-neutral-300 dark:border-neutral-700'>
                    <tr>
                        <th className='text-left tracking-wide p-3 font-semibold text-sm w-1/4'>Title</th>
                        <th className='text-left tracking-wide p-3 font-semibold text-sm w-1/3'>Technologies</th>
                        <th className='text-left tracking-wide p-3 font-semibold text-sm w-1/6'>Institution</th>
                        <th className='text-left tracking-wide p-3 font-semibold text-sm w-1/6'>Completion Date</th>
                        <th className='text-left tracking-wide p-3 font-semibold text-sm w-1/5'>Certificate Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((course) => (
                            <tr key={course.title} className='border-b border-neutral-300/30 dark:border-neutral-700/30 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-colors duration-300'>
                                <td className='p-3 text-sm text-secondary font-semibold'>{course.title}</td>
                                <td className='p-3 text-sm text-secondary'>
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            course.technologies.map((tech) => (
                                                <span key={tech} className='bg-emerald-500/10 dark:bg-emerald-300/10 text-emerald-800 dark:text-emerald-300 rounded-full text-sm px-3 py-1'>{tech}</span>
                                            ))
                                        }
                                    </div>
                                </td>
                                <td className='p-3 text-sm text-secondary font-semibold'>{course.institution}</td>
                                <td className='p-3 text-sm text-secondary font-semibold'>
                                    <span className='flex items-center gap-2'>
                                        <FaCalendar className='mr-2' />
                                        {new Date(course.completitionDate).toLocaleDateString()}
                                    </span>
                                </td>
                                <td className='p-3 text-sm text-secondary font-semibold '>
                                    <Link href={course.certificateLink} target='_blank' className='flex items-center gap-2 hover:text-emerald-800 hover:dark:text-emerald-300 transiction-colors duration-300' rel='noopener noreferrer'>
                                        <span>{getText(course.certificateLink)}</span>
                                        <FaArrowUpRightFromSquare />
                                    </Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


            {/* Mobile table */}
            <table className='md:hidden min-w-full rounded-lg shadow-md'>
                <thead className='border-b border-neutral-300 dark:border-neutral-700'>
                    <tr>
                        <th className='text-left tracking-wide p-3 font-semibold text-sm md:text-md'> Title</th>
                        <th className='text-left tracking-wide p-3 font-semibold text-sm md:text-md'> Technologies</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((course) => (
                            <tr key={course.title} className='border-b border-neutral-300/30 dark:border-neutral-700/30 transition-colors duration-300'>
                                <td className='p-3 text-sm text-secondary font-semibold'>{course.title}</td>
                                <td className='p-3 text-sm text-secondary'>
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            course.technologies.map((tech) => (
                                                <span key={tech} className='bg-emerald-500/10 dark:bg-emerald-300/10 text-emerald-800 dark:text-emerald-300 rounded-full text-sm px-3 py-1'>{tech}</span>
                                            ))
                                        }
                                    </div>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default CoursesHistoryPage;