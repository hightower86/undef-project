import React from 'react';

import DokerLogo from '../assets/docker-logo.svg';
import ReduxLogo from '../assets/redux-logo.svg';
import ReactLogo from '../assets/react-logo.svg';
import NodeLogo from '../assets/node-logo.svg';
import TsLogo from '../assets/ts-logo.svg';
import VueLogo from '../assets/vue-logo.svg';
import GraphqlLogo from '../assets/graphql-logo.svg';
import NextjsLogo from '../assets/next-logo.svg';
import NestjslLogo from '../assets/nestjs-logo.svg';
import GatsbylLogo from '../assets/gatsby-logo.svg';
import KubernetslLogo from '../assets/kubernetes-logo.svg';

const Section2 = () => {
  return (
    <section
      id='whywe'
      className='pt-16 md:pt-24 bg-gray-100 h-screen max-w-full flex flex-col items-center justify-center'
    >
      <div className=' px-2 py-4 items-center max-w-screen-lg'>
        <div className='md:w-5/6'>
          <div className='inline-block mb-6'>
            <h2
              className=' inline-block text-3xl 
          md:text-4xl  font-bold '
            >
              Современный стэк тэхнологий
            </h2>
            <div className='-mt-6 h-6 bg-gray-200'></div>
          </div>

          <div className=' pl-2 mb-16 border-orange-500 border-l-4 text-base'>
            <p>
              Наша специализация – экосистема современного{' '}
              <span className='text-orange-600'>
                JavaScript, Reaсt JS и Reaсt Native
              </span>
              . Разрабатываем веб сервисы, мобильные приложения и корпоративные
              решения.
            </p>
            <p className='my-3'>
              Использование актуальных технологий позволяет создавать решения
              быстрее, качественнее и с меньшими затратами.
            </p>
            <p>
              Заботимся о том, чтобы пользовательские интерфейсы были быстрыми и
              удобными, а серверная часть надежной и масштабируемой.
            </p>
          </div>
        </div>

        <div className='md:flex  mt-8  md:flex md:justify-between'>
          <div className=' w-full md:w-6/12 md:mr-24 mb-12 '>
            <div className='flex justify-between mb-16'>
              <TsLogo className='h-20 w-20' />
              <ReactLogo className='h-20 w-20' />
              <VueLogo className='h-20 w-20' />
            </div>
            <div className='flex justify-between'>
              <NextjsLogo className='h-20 w-20' />
              <GatsbylLogo className='h-20 w-20' />
              <KubernetslLogo className='h-20 w-20' />
            </div>
          </div>
          <div className=' w-full md:w-6/12'>
            <div className='flex justify-between mb-16'>
              <DokerLogo className='h-20 w-20' />
              <NodeLogo className='h-20 w-20' />
              <ReduxLogo className='h-20 w-20' />
            </div>
            <div className='flex justify-between'>
              <GraphqlLogo className='h-20 w-20' />
              <NestjslLogo className='h-20 w-20' />
              <TsLogo className='h-20 w-20' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//Section2.propTypes = {};

export default Section2;
