import React from 'react';
//import PropTypes from 'prop-types';

import Illustration from '../assets/illustration-1.svg';
import Button from '../assets/button-1.svg';
import Arrow from '../assets/arrow-down.svg';

const Section1 = () => {
  return (
    <section
      id='home'
      className=' pt-16 md:pt-24 mb-8 bg-white md:h-screen max-w-full flex flex-col items-center justify-center'
    >
      <div className='relative md:flex px-2 md:h-screen items-center max-w-screen-lg'>
        <div className='md:w-1/2 '>
          <h1 className='text-4xl md:text-5xl  font-bold mb-4'>
            Веб и мобильная разработка
          </h1>
          <p>
            Мы занимаемся продуктовой разработкой для технологических стартапов
            и состоявшихся компаний. Возьмем на себя все инженерные задачи:​
            архитектуру, итеративную разработку и поддержку.
          </p>
          <Button className='mt-16 block' />
        </div>
        <Illustration className='w-1/2 hidden md:block ' />
        <Arrow className='absolute bottom-0 right-0 hidden md:block' />
      </div>
    </section>
  );
};
//Section1.propTypes = {};

export default Section1;
