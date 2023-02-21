import React from 'react'
import { TestimonialsContainer, Testimonial, TitleColor, ClientAvatar } from './Testimonials.styled';

import myInfo from '../../data/data';

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h5>Review from customers and employees</h5>
        <TitleColor>Testimonials</TitleColor>
        <TestimonialsContainer>
          {myInfo.testimonials.map((item, index) => (
            <Testimonial key={index}>
              <ClientAvatar>
                <img src={item.img} alt="client" />
              </ClientAvatar>
              <h5>{item.name}</h5>
              <p>{item.text}</p>
            </Testimonial>
          ))}
        </TestimonialsContainer>
      </section>
  )
}

export default Testimonials