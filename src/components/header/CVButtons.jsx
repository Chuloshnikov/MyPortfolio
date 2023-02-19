import React from 'react'
import { Buttons, Btn, PrimaryBtn } from './CVButtons.styled';
import CV from '../../assets/docs/resume.pdf';




const CVButtons = () => {
  return (
        <Buttons>
            <Btn href={CV} download >Download CV</Btn>
            <PrimaryBtn href='*'>Contacts</PrimaryBtn>
        </Buttons>
  )
}

export default CVButtons