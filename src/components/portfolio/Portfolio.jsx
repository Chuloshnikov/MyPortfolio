import React from 'react'
import { TitleColor, PortfolioContainer, PortfolioItem, PortfolioItemImage, Buttons, Btn, PrimaryBtn, PortfolioItemText } from './Portfolio.styled';


import myInfo from '../../data/data';

const Portfolio = () => {
  return (
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <TitleColor>Portfolio</TitleColor>
        <PortfolioContainer>
          {myInfo.portfolioProjects.map((item, index) => (
            <PortfolioItem key={index}>
              <PortfolioItemImage>
                <img src={item.img} alt="project-img"/>
              </PortfolioItemImage>
              <PortfolioItemText>
                <h3>{item.name}</h3>
                <p>{item.patwork} Project</p>
              </PortfolioItemText>
              <Buttons>
                <Btn href={item.githublink} target="_blank">GitHub</Btn>
                <PrimaryBtn href={item.demolink} target="_blank"> Live Demo</PrimaryBtn>
              </Buttons>
            </PortfolioItem>
          ))}
        </PortfolioContainer>
      </section>
  )
}

export default Portfolio