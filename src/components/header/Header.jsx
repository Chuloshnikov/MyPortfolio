import React from 'react'
import { HeaderContainer, Profession, MyImage, ImageContainer, ScrollDown } from './Header.styled';
import CVButtons from './CVButtons';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/images/Screenshot_4.png';

const Header = () => {
  return (
    <HeaderContainer>
        <h5>Hello i'm</h5>
          <h1>Max Ch</h1>
          <Profession>
            Frontend Developer
          </Profession>
          <CVButtons/>
          <HeaderSocials/>
          <ImageContainer>
            <MyImage src={ME} alt="me"/>
          </ImageContainer>
          <ScrollDown>Scroll Down</ScrollDown>  
    </HeaderContainer>
  )
}

export default Header