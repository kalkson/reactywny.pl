import React from 'react';
import NewsletterSection from 'components/pages/NewsletterPage/NewsletterSection';
import SEO from '../seo/SEO';

const FaqPage = () => (
  <>
    <SEO
      title="reactywny.pl - dołącz do newslettera"
      description="Dołącz do wartościowego newslettera, z którego dostajesz regularną paczkę wiedzy o webdevelopmencie z automatu!"
    />
    <NewsletterSection />
  </>
);

export default FaqPage;
