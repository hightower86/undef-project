import React from 'react';

//import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';
import Section1 from '../components/section-1';
import Section2 from '../components/section-2';
//import illustration from '../images/illustration-1.svg';

function IndexPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />
      <Header />
      <Section1 />
      <Section2 />
    </>
  );
}

export default IndexPage;
