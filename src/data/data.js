import chshops from '../assets/images/chshops.png';
import chshop from '../assets/images/chshop.png';
import adminpanel from '../assets/images/Adminpanel.png';
import moviebes from '../assets/images/Movie.png';
import chnotesapp from '../assets/images/chnotesapp.png';
import mchpizzastore from '../assets/images/mchpizzastore.png';
import buyersite from '../assets/images/buyersite.png';
import siteadmin from '../assets/images/siteadmin.png';
import metaverse from '../assets/images/metaverse.png';
import imagegen from '../assets/images/imagegen.png';

import customer1 from '../assets/images/customer1.png';
import customer2 from '../assets/images/customer2.png';

import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiStyledcomponents } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';


 
 const myInfo = {
    experience: {
        years: 2,
    },
    projects: {
        pat: 12,
        work: 2,
    },
    clients: {
        proj: 2,
    },

    projectNotate: `Goal: find a job as a front-end development. Preferably remotely.
I have experience with adaptive and responsive HTML/CSS layout. I know JavaScript and constantly improve my knowledge. 
For development, I would prefer to work with the Next.js library. You can see my code, work and pet projects at the link to my`,

    tech: [
        {
            name: "Next.js",
            icon: SiNextdotjs,
            iconColor: '#000000',
            starsValue: 4,
        },
        {
            name: "React.js",
            icon: SiReact,
            iconColor: '#5ED3F3',
            starsValue: 4,
        },
        {
            name: "HTML5",
            icon: SiHtml5,
            iconColor: '#E96228',
            starsValue: 4,
        },
        {
            name: "CSS3",
            icon: SiCss3,
            iconColor: '#2862E9',
            starsValue: 4,
        },
        {
            name: "JavaScript",
            icon: SiJavascript,
            iconColor: '#EFD81D',
            starsValue: 4,
        },
        {
            name: "Tailwind-CSS",
            icon: SiTailwindcss,
            iconColor: '#409AA5',
            starsValue: 4,
        },
        {
            name: "Styled-Components",
            icon: SiStyledcomponents,
            iconColor: '#F986E8',
            starsValue: 3,
        },
        {
            name: "Material-UI",
            icon: SiMaterialui,
            iconColor: '#0081CB',
            starsValue: 3,
        },
        {
            name: "Mongo DB",
            icon: SiMongodb,
            iconColor: 'green',
            starsValue: 4,
        },
    ],
    services: [
        
        {
            name: 'Development of fullstack apps using the Next.JS/MongoDB/AWS/NextAuth and more.'
        },
        {
            name: 'Development of front-end applications using the React.JS library.'
        },
        {
            name: 'Layout of web pages of any complexity. Classic layout via HTML/CSS.'
        },
        {
            name: 'Refinement or correction of existing solutions.'
        },
    ],
    portfolioProjects: [
        {
            name: 'MCH PizzaStore',
            githublink: 'https://github.com/Chuloshnikov/mchpizzastore',
            demolink: 'https://mchpizzastore.vercel.app/',
            img: mchpizzastore,
            patwork: 'Work',
        },
        {
            name: 'BuyerAnastasiia',
            githublink: 'https://github.com/Chuloshnikov/buyerwebsite',
            demolink: 'https://buyeranastasiia.vercel.app/',
            img: buyersite,
            patwork: 'Work',
        },
        {
            name: 'CMS For Website',
            githublink: 'https://github.com/Chuloshnikov/buyeradmin',
            demolink: 'https://buyeradmin.vercel.app/',
            img: siteadmin,
            patwork: 'Work',
        },
        {
            name: 'Metaverse',
            githublink: 'https://github.com/Chuloshnikov/metaverse-madness',
            demolink: 'https://metaversemad.netlify.app/',
            img: metaverse,
            patwork: 'Pat',
        },
        {
            name: 'ImageGen AI',
            githublink: 'https://github.com/Chuloshnikov/metaverse-madness',
            demolink: 'https://mchimagegen.netlify.app/',
            img: imagegen,
            patwork: 'Pat',
        },
        {
            name: 'ChNotesApp',
            githublink: 'https://github.com/Chuloshnikov/notesapp',
            demolink: 'https://chnotesapp.netlify.app/',
            img: chnotesapp,
            patwork: 'Pat',
        },
    ],

    testimonials: [
        {
            name: 'Max Kidanov',
            text: `As a fellow web developer who has had the pleasure of working alongside Max, 
            I can confidently say that he is one of the most skilled and dedicated developers 
            I have had the pleasure of working with. What truly sets Max apart, however, is 
            hiscommitment to collaboration and teamwork. He is always willing to lend a 
            helping hand to other developers on the team and is never too busy to answer 
            questions or provide guidance. This has made a huge difference in our ability 
            to work efficiently and effectively as a team.`,
            img: customer1,
        },
        {
            name: 'Iryna Shandar',
            text: `Max's expertise in Frontend development is unmatched, 
            and he consistently produces high-quality work that is both 
            efficient and effective. He is always up-to-date on the latest 
            trends and technologies in web development, and he is constantly 
            looking for ways to improve and streamline our development processes.`,
            img: customer2,
        },
    ]
}
    

export default myInfo;