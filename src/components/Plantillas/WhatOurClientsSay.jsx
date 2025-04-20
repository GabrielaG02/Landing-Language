import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Icon from '../Atoms/Icon.jsx';
import Button from '../Atoms/Button.jsx';

const testimonials = [
  {
    id: 1,
    name: 'Aracely Jaynes',
    rating: 4,
    text: 'I booked an appointment with the Peruvian consulate to legalize some documents to be used in Peru. Professional, prompt responses to many of my questions, I had a seamless transaction and would highly recommend Tatiana to anyone. She was polite, professional, and helped me tremendously. And the conversation was very entertaining 😊'
  },
  {
    id: 2,
    name: 'Brittney Enin',
    rating: 4,
    text: 'Latin Language Solutions is an amazing interpretation resource. In my multilingual organization, Tatiana’s work has helped us be equitable to the language needs of our Spanish-speaking staff for all staff meetings. She is very responsive and professional, and awesome at showing up on short notice. Her pricing is especially non-profit-friendly. 😊 I would strongly recommend her for any Spanish interpretation needs that come up in your organization.'
  },
  {
    id: 3,
    name: 'Carlos Mendoza',
    rating: 5,
    text: 'Great experience! Highly recommended.'
  },
  {
    id: 4,
    name: 'Brian Haynes',
    rating: 4,
    text: 'I had an appointment with the Peruvian consulate to legalize some documents to be used in Peru. Professional, prompt responses to many of my questions, I had a seam-less transaction and would highly recommend Tatiana to anyone. She was polite, professional, and helped me tremendously. And the conversation was very entertaining and fun!'
  },
  // ... añade más testimonios si lo deseas
];

export default function TestimonialSlider() {
  return (
    <section className="relative bg-[var(--color-neutral-500)] py-12">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 max-w-[75vw] mx-auto">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--color-primary)]">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-base text-black">
              Satisfied clients who trust our services
            </p>
          </div>
          <Button text="Contact Us" tipo="primario" />
        </div>

        {/* Swiper Slider */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next'
            }}
            className="pb-8"
          >
            {testimonials.map(item => (
              <SwiperSlide
                key={item.id}
                className="flex-shrink-0 !w-80/100 md:!w-65/100 lg:!w-50/100 min-h-[40vh] bg-white rounded-xl p-6 shadow-md mb-5"
              >
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                  {item.name}
                </h3>
                <div className="flex mb-4 text-yellow-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon
                      key={i}
                      name={i < item.rating ? 'bi bi-star-fill' : 'bi bi-star'}
                      size="1.2rem"
                      className="mr-1"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-[var(--color-secondary)]">
                  “{item.text}”
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className='flex space-x-4 justify-center'>
          <div className="left-0 transform  custom-prev z-20">
            <Icon
              name="bi bi-arrow-left-circle"
              size="2.4rem"
              className="text-[var(--color-primary)]"
            />
          </div>
          <div className="right-0 transform  custom-next z-20">
            <Icon
              name="bi bi-arrow-right-circle"
              size="2.4rem"
              className="text-[var(--color-primary)]"
            />
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}
