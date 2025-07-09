import { Education } from '@/types';
import CodingWorkshopSVG from '@/svgs/CodingWorkshopSVG';
import OpenSourceSVG from '@/svgs/OpenSourceSVG';
import DataAnalysisSVG from '@/svgs/DataAnalysisSVG';

export const education: Education[] = [
    {
        title: 'Technical High School in IT',
        institution: 'ETEC Hortolândia',
        period: '2018 - 2020',
        format: 'In-person',
        description: 'Here I developed a solid foundation in programming and IT fundamentals, going throught the following knowledges:',
        topics_covered: ['Programming logic, networking, front-end and back-end web development fundamentals', 'Computer hardware installation, maintenance, and basic network troubleshooting', 'Database creation and management with SQL, plus object-oriented programming concepts', 'Collaborative group projects simulating real-world IT and development environments'],
        SVGComponent: OpenSourceSVG
    },
    {
        title: 'Associate Degree in Systems Analysis and Development',
        institution: 'FATEC Campinas',
        period: '2021 - 2023',
        format: 'In-person',
        description: 'This course provided me with a comprehensive understanding of software development, databases, and web technologies. Key learnings included:',
        topics_covered: ['Software engineering with advanced object-oriented programming and system design', 'Relational database management, normalization, and network protocols with security focus', 'Human-computer interaction principles and agile project management methodologies', 'Team-based projects fostering collaboration, communication, and practical application'],
        SVGComponent: CodingWorkshopSVG
    },
    {
        title: 'Postgraduate Degree in Data Science',
        institution: 'MBA USP ESALQ',
        period: '2024 - Ongoing',
        format: 'Online',
        description: 'This program is enhancing my skills in data analysis, machine learning, and business intelligence. Key learnings include:',
        topics_covered: ['Statistical methods and machine learning algorithms including regression and clustering', 'Python programming for data wrangling, transformation, and analysis', 'Business applications of data science: BI, risk analytics, and cloud computing', 'Emphasis on integrating technical skills with strategic business decision-making'],
        SVGComponent: DataAnalysisSVG
    }
];