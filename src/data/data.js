 import chshops from '../assets/images/chshops.png';
 import chshop from '../assets/images/chshop.png';
 import adminpanel from '../assets/images/Adminpanel.png';
 import moviebes from '../assets/images/Movie.png';

 import customer1 from '../assets/images/customer1.png';
 import customer2 from '../assets/images/customer2.png';


 
 const myInfo = {
    experience: {
        years: 1,
    },
    projects: {
        pat: 7,
        work: 2,
    },
    clients: {
        proj: 2,
    },

    projectNotate: `Goal: find a job as a front-end development. Preferably remotely, or in the office on the right bank of Kyiv.
I have experience with adaptive and responsive HTML/CSS layout. I know JavaScript and constantly improve my knowledge. 
For development, I would prefer to work with the React library. You can see my code and pet projects at the link to my`,

    tech: {
        html: 3,
        css: 3,
        js: 3,
        react: 3,
        styled: 3,
        material: 1,
        tailwind: 1,
        php: 1,
        mysql: 1,
    },
    services: [
        {
            name: 'Layout of web pages of any complexity. Classic layout via HTML/CHSS SSSS. React layout.'
        },
        {
            name: 'Development of front-end applications using the React.JS library.'
        },
        {
            name: 'Refinement or correction of existing solutions.'
        },
    ],
    portfolioProjects: [
        {
            name: 'CHShops',
            githublink: 'https://github.com/Chuloshnikov/shops-dashboard',
            demolink: 'https://chshops-dashboard.netlify.app/',
            img: chshops,
            patwork: 'Pat',
        },
        {
            name: 'CHShopDashboard',
            githublink: 'https://github.com/Chuloshnikov/dashboard',
            demolink: 'https://chshop-dashboard.netlify.app/',
            img: chshop,
            patwork: 'Pat',
        },
        {
            name: 'AdminPanel',
            githublink: 'https://github.com/Chuloshnikov/AdminPanel',
            demolink: 'https://chadminpanel.netlify.app/',
            img: adminpanel,
            patwork: 'Pat',
        },
        {
            name: 'Moviebes',
            githublink: 'https://github.com/Iryna-25/moviebes-website',
            demolink: 'https://iryna-25.github.io/moviebes-website/',
            img: moviebes,
            patwork: 'Pat',
        },
    ],

    testimonials: [
        {
            name: 'Max Kidanov',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.`,
            img: customer1,
        },
        {
            name: 'Iryna Shandar',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            img: customer2,
        },
    ]
}
    

export default myInfo;