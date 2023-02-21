import React, { useRef } from 'react';
import { TitleColor, ContactsContainer, ContactsOptions, ContactOption, Button } from './Contacts.styled';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import emailjs from '@emailjs/browser';

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o1o48ly', 'template_hnisq8m', form.current, 'TZaPO96gnKE3GoF8A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <TitleColor>
        Contact Me
      </TitleColor>
      <ContactsContainer>
        <ContactsOptions>
          <ContactOption>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>Maks447@ukr.net</h5>
            <a href="mailto:maks447@ukr.net" target="_blank">Send a message</a>
          </ContactOption>
          <ContactOption>
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Max Ch</h5>
            <a href="https://www.facebook.com/profile.php?id=100011425857304" target="_blank">Send a message</a>
          </ContactOption>
          <ContactOption>
            <BsWhatsapp/>
            <h4>WatsApp</h4>
            <h5>My Account</h5>
            <a href="https://api.whatsapp.com/send?phone+0730452115" target="_blank">Send a message</a>
          </ContactOption>
        </ContactsOptions>
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder='Your Full Name' required/>
              <input type="email" name="email" placeholder='Your Email' required/>
              <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
              <Button type='submit' value="Send">Send Message</Button>
          </form>
      </ContactsContainer>
      </section>
  )
}

export default Contacts