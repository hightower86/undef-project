import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import illustration from '../images/illustration-1.svg';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />

      <img src={illustration} alt='illustration' />

      <section className='text-center'></section>
    </Layout>
  );
}

export default IndexPage;
