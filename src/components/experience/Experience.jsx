import React from 'react';
import { ExperienceContainer, TitleColor, ExperienceItem } from './Experience.styled';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiStyledcomponents } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';


import Rating from '@mui/material/Rating';

import myInfo from '../../data/data';


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <TitleColor>My Experience</TitleColor>
      <ExperienceContainer>
          <ExperienceItem>
            <div><SiHtml5 color='#E96228'/><p>HTML5</p></div>
              <Rating
                name="html5"
                value={myInfo.tech.html}
                readOnly
              />
          </ExperienceItem>
          <ExperienceItem>
           <div><SiCss3 color='#2862E9'/><p>CSS3</p></div> 
              <Rating
                name="css3"
                value={myInfo.tech.css}
                readOnly
              />
          </ExperienceItem>
          <ExperienceItem>
            <div><SiJavascript color='#EFD81D'/><p>JavaScript</p></div>
              <Rating
                name="javascript"
                value={myInfo.tech.js}
                readOnly
              />
          </ExperienceItem>
          <ExperienceItem>
            <div><SiReact color='#5ED3F3'/><p>React</p></div>
              <Rating
                name="react"
                value={myInfo.tech.react}
                readOnly
              />
          </ExperienceItem>
          <ExperienceItem>
            <div><SiStyledcomponents color='#F986E8'/><p>Styled-Components</p></div>
              <Rating
                name="styled-components"
                value={myInfo.tech.styled}
                readOnly
              />
          </ExperienceItem>
          <ExperienceItem>
            <div><SiMaterialui color='#0081CB'/><p>Material-UI</p></div>
              <Rating
                name="material-ui"
                value={myInfo.tech.material}
                readOnly
              />
          </ExperienceItem>
          <ExperienceItem>
            <div><SiTailwindcss color='#409AA5'/><p>Tailwind-CSS</p></div>
              <Rating
                name="tailwind-css"
                value={myInfo.tech.tailwind}
                readOnly
              />
          </ExperienceItem>
          <ExperienceItem>
            <div><SiPhp color='#7377AD'/><p>PHP</p></div>
              <Rating
                name="PHP"
                value={myInfo.tech.php}
                readOnly
              />
          </ExperienceItem>
          <ExperienceItem>
            <div><SiMysql color='#7377AD'/><p>MySql</p></div>
              <Rating
                name="MySql"
                value={myInfo.tech.mysql}
                readOnly
              />
          </ExperienceItem>
      </ExperienceContainer>
      </section>
  )
}

export default Experience