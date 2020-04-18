//import { Link } from 'gatsby';
import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../assets/logo.svg';
import Burger from '../assets/burger.svg';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [isRussian, toggleLanguage] = useState(true);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header className='border bg-white md:border-b-1 top-0 fixed w-full z-20'>
      <div className='flex flex-wrap  justify-between items-center  md:max-w-screen-lg p-2 mx-auto h-12 md:h-90px '>
        <a onClick={() => scrollTo('#home')}>
          {/* <h1 className='flex items-center text-white no-underline'></h1> */}
          <Logo className='h-3285 md:h-3945' />
        </a>

        <button
          className='md:hidden'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <Burger />
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex bg-white md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `#whywe`,
              title: `${isRussian ? 'Почему мы' : 'Why we'}`,
            },
            {
              route: `#home`,
              title: `${isRussian ? 'Проекты' : 'Projects'}`,
            },
            {
              route: `#home`,
              title: `${isRussian ? 'Контакты' : 'Contacts'}`,
            },
          ].map((link) => (
            <a
              className='block hover:text-orange-600 transform 
              hover:bg-orange-300
              md:hover:bg-white
              md:hover:translate-x-0 hover:translate-x-1 mt-4 py-2 
              text-gray-800 no-underline md:inline-block md:mt-0 md:ml-16'
              key={link.title}
              onClick={() => {
                scrollTo(link.route);
                toggleExpansion(!isExpanded);
              }}
            >
              {link.title}
            </a>
          ))}
        </nav>
        <div className='hidden md:block'>
          <a
            onClick={() => toggleLanguage(false)}
            className={`${
              !isRussian ? 'pt-10 bg-orange-500 text-white' : ''
            }  mr-3 px-1 pb-2 `}
          >
            Eng
          </a>
          <a
            onClick={() => toggleLanguage(true)}
            className={`${
              isRussian ? 'pt-10 bg-orange-500 text-white' : ''
            }  px-1 pb-2 `}
          >
            Ru
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
