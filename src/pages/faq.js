import React from 'react';
import FaqSection from 'components/pages/FaqPage/FaqSection/FaqSection';
import ContactSection from 'components/pages/FaqPage/ContactSection/ContactSection';
import PageHeader from '../components/organisms/PageHeader/PageHeader';
import PageFooter from '../components/molecules/PageFooter/PageFooter';
import SEO from '../seo/SEO';

const FaqPage = () => (
  <>
    <SEO
      title="reactywny.pl - FAQ najczęściej zadawane pytania"
      description="Zobacz najczęściej zadawane pytania, na które mógłbyś szukać odpowiedź dotyczące działania twórcy i bloggera reactywny.pl"
    />
    <PageHeader />
    <FaqSection />
    <ContactSection />
    <PageFooter />
  </>
);

export default FaqPage;
