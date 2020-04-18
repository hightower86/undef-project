import { Link } from 'gatsby';
import React, { useState } from 'react';

import Logo from '../assets/logo.svg';
import Burger from '../assets/burger.svg';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
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
      <div className='flex flex-wrap  items-center justify-between md:max-w-screen-lg p-2 mx-auto h-12 md:h-90px '>
        <Link to='/'>
          {/* <h1 className='flex items-center text-white no-underline'></h1> */}
          <Logo className='h-3285 md:h-3945' />
        </Link>

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
              route: `/about`,
              title: `Почему мы`,
            },
            {
              route: `/contact`,
              title: `Проекты`,
            },
            {
              route: `/contact`,
              title: `Контакты`,
            },
          ].map((link) => (
            <Link
              className='block hover:text-orange-600 transform 
              md:hover:translate-x-0 hover:translate-x-1 mt-4 py-2 
              text-gray-800 no-underline md:inline-block md:mt-0 md:ml-6'
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
