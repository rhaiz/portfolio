import { Project } from '@/types';


export const projects: Project[] = [
    {
        title: 'Portfolio',
        description: 'This is my personal portfolio website. It showcases my skills, projects, and experience as a software developer.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com/rhaiz/portfolio',
        demoLink: 'https://portfolio-rhaissazeferinos-projects.vercel.app/',
        imageLink: '/projects/portfolio.png'
    },
    {
        title: 'Soroban',
        description: 'This is application of a online Soroban. It allows users to practice Soroban abacus calculations and improve their mental math skills.',
        technologies: ['React.js', 'HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/rhaiz/Soroban',
        demoLink: 'https://soroban-rhaissazeferinos-projects.vercel.app/',
        imageLink: '/projects/soroban.png',
    },
    // {
    //     title: 'TrelloStoryBot',
    //     description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     technologies: ['Python', 'HTML'],
    //     githubLink: 'https://github.com/rhaiz/TrelloStoryBot',
    //     demoLink: 'TODO',
    //     imageLink: '/projects/full_courses_link.png',
    // },
    {
        title: 'StringConversion',
        description: 'Conversion of strings between different formats, such as snake_case, uppercase, and masked with asterisks (*). It provides a simple interface to convert strings easily.',
        technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/rhaiz/StringConversion',
        demoLink: 'https://string-conversion.vercel.app/',
        imageLink: '/projects/string_conversion.png',
    }
]