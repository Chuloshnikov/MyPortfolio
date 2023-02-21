import React from 'react';
import { FooterContainer, Links, FooterSocials, FooterCopyright, Logo } from './Footer.styled';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <FooterContainer>
      <Logo href=''>MCH</Logo>
      <Links>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#expirience">Expirience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contacts">Contacts</a></li>
      </Links>
        <FooterSocials>
            <a href='https://www.facebook.com/profile.php?id=100011425857304' target="_blank"><FaFacebookF/></a>
            <a href='https://www.instagram.com/maxmaxich/' target="_blank"><FaInstagram/></a>
            <a href='https://twitter.com/MaksVajner'><IoLogoTwitter/></a>
        </FooterSocials>
        <FooterCopyright>
          <small>&copy; Max Ch special CV. Made with React</small>
        </FooterCopyright>
      </FooterContainer>
  )
}

export default Footer