import React from 'react'
import { TestimonialsContainer, Testimonial, TitleColor, ClientAvatar } from './Testimonials.styled';


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import myInfo from '../../data/data';

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h5>Review from customers and employees</h5>
        <TitleColor>Testimonials</TitleColor>
        
        <TestimonialsContainer>
        <Swiper
        modules={[ Pagination ]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
          {myInfo.testimonials.map((item, index) => (
             <SwiperSlide key={index}>
              <Testimonial >
                <ClientAvatar>
                  <img src={item.img} alt="client" />
                </ClientAvatar>
                <h5>{item.name}</h5>
                <p>{item.text}</p>
              </Testimonial>
            </SwiperSlide>
          ))}
          </Swiper>
        </TestimonialsContainer>
        
      </section>
  )
}

export default Testimonials