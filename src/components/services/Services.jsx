import React from 'react';
import { ServicesContainer, ServiceHeader, ServiceList, TitleColor } from './Services.styled';
import { BiCheck } from 'react-icons/bi';

import myInfo from '../../data/data';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <TitleColor>Services</TitleColor>
      <ServicesContainer>
          <article>
            <ServiceHeader>
              <h3>Front-End development</h3>
            </ServiceHeader>
            <ServiceList>
                {myInfo.services.map((item, index) => (<li key={index}><BiCheck color='#F04422'/><p>{item.name}</p></li>))}
            </ServiceList>
          </article>
      </ServicesContainer>
    </section>
  )
}

export default Services