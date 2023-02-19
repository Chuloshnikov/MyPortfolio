import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { SocialContainer } from './HeaderSocials.styled';

const HeaderSocials = () => {
  return (
        <SocialContainer>
          <a href='https://www.linkedin.com/in/maxim-culoshnikov-ba9a0283/' target="_blank"><BsLinkedin/></a>
          <a href='https://github.com/Chuloshnikov' target="_blank"><FaGithub/></a>
          <a href='https://www.facebook.com/profile.php?id=100011425857304' target="_blank"><ImFacebook2/></a>
        </SocialContainer>
  )
}

export default HeaderSocials;