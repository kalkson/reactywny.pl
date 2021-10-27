import AboutSection from 'components/pages/AboutPage/AboutSection/AboutSection';
import React from 'react';

import FaqSection from '../components/pages/AboutPage/FaqSection/FaqSection';
import SEO from '../seo/SEO';

const FaqPage = () => (
  <>
    <SEO
      title="reactywny.pl - FAQ najczęściej zadawane pytania"
      description="Zobacz najczęściej zadawane pytania, na które mógłbyś szukać odpowiedź dotyczące działania twórcy i bloggera reactywny.pl"
    />
    <AboutSection />
    <FaqSection />
  </>
);

export default FaqPage;
