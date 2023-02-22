import React from 'react';
import { ExperienceContainer, TitleColor, ExperienceItem } from './Experience.styled';

import Rating from '@mui/material/Rating';

import myInfo from '../../data/data';


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <TitleColor>My Experience</TitleColor>
      <ExperienceContainer>
        {myInfo.tech.map((item, index) => (
          <ExperienceItem key={index}>
               <div><item.icon color={item.iconColor}/><p>{item.name}</p></div>
              <Rating
                name="html5"
                value={item.starsValue}
                readOnly
              />
          </ExperienceItem>
        ))}
      </ExperienceContainer>
      </section>
  )
}

export default Experience