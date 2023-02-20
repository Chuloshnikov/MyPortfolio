import React from 'react';
import { AboutContainer, AboutMe, AboutContent, Cards, Card, ToGitHub, Button } from './About.styled';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Me from '../../assets/images/Screenshot_5.png';

import myInfo from '../../data/data';


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <AboutContainer>
        <AboutMe>
            <div>
              <img src={Me} alt="Me" />
            </div>
        </AboutMe>
        <AboutContent>
            <Cards>
              <Card>
                  <FaAward/>
                  <h5>Experience</h5>
                  <small>{myInfo.experience.years}+ Years Of Coding</small>
              </Card>
              <Card>
                  <FiUsers/>
                  <h5>Clients</h5>
                  <small>{myInfo.clients.proj}+ Worldwide</small>
              </Card>
              <Card>
                  <VscFolderLibrary/>
                  <h5>Projects</h5>
                  <small>{myInfo.projects.pat}+ Pat Projects</small>
                  <small>{myInfo.projects.work}+ Work Projects</small>
              </Card>
            </Cards>
            <p>{myInfo.projectNotate} <ToGitHub href='https://github.com/Chuloshnikov'>GitHub</ToGitHub></p>

            <Button href='#contacts'>Contact Me</Button>
        </AboutContent>
      </AboutContainer>
      </section>
  )
}

export default About