import React from 'react';
import FaqSection from 'components/pages/FaqPage/FaqSection/FaqSection';
import ContactSection from 'components/pages/FaqPage/ContactSection/ContactSection';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';

const FaqPage = () => (
  <>
    <PageHeader />
    <FaqSection />
    <ContactSection />
    <PageFooter />
  </>
);

export default FaqPage;
