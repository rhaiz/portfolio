import { Skill } from '@/types';
import { BsFiletypeSql } from 'react-icons/bs';
import { FaCss3, FaFigma, FaGithub, FaHtml5, FaPython, FaTrello, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiTypescript, SiNextdotjs } from 'react-icons/si';

export const skills: Skill[] = [
    {
        title: 'Python',
        description: 'Experience with Python for scripting, API integration, and automation. Familiar with libraries for data manipulation.',
        icon: FaPython,
    },
    {
        title: 'NoSQL',
        description: 'Hands-on experience with NoSQL databases, including IBM Cloudant. Comfortable working with document-based data and flexible schemas.',
        icon: SiMongodb,
    },
    {
        title: 'SQL',
        description: 'Strong understanding of relational databases and SQL queries for data retrieval and transformation',
        icon: BsFiletypeSql,
    },
    {
        title: 'Git Version Control',
        description: 'Proficient in Git and GitHub for collaborative development, version tracking, and code management in team environments.',
        icon: FaGithub,
    },
    {
        title: 'JavaScript',
        description: 'Proficient in JavaScript for building interactive web applications, with experience in frontend frameworks like Vue.js and React.js.',
        icon: SiJavascript,
    },
    {
        title: 'HTML',
        description: 'Skilled in writing semantic, accessible HTML to structure web pages effectively.',
        icon: FaHtml5,
    },
    {
        title: 'CSS',
        description: 'Experienced with responsive design and layout techniques using CSS, including Flexbox and Grid. Familiar with Bootstrap for UI components.',
        icon: FaCss3,
    },
    {
        title: 'Agile Methodology',
        description: 'Experience working in Agile environments with iterative development cycles, daily stand-ups, and collaborative planning.',
        icon: FaTrello,
    },
    {
        title: 'Design',
        description: 'Background in visual and graphic design, with attention to layout, typography, and user experience. Experience with tools like Figma, Canva, and Adobe Suite.',
        icon: FaFigma,
    },
    {
        title: 'TypeScript',
        description: 'Experience with TypeScript for building type-safe applications. Familiar with typing patterns, interfaces.',
        icon: SiTypescript,
    },
    {
        title: 'Node.js',
        description: 'Experience with Node.js for building server-side applications and backend services.',
        icon: FaNodeJs,
    },
    {
        title: 'Next.js',
        description: 'Hands-on experience with Next.js for building full-stack applications with React.',
        icon: SiNextdotjs,
    },
]