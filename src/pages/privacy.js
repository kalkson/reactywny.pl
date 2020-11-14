import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';
import PrivacyWrapper from '../components/pages/PrivacyPage/PrivacyWrapper';
import SEO from '../components/SEO';

const PrivacyPage = () => (
  <>
    <SEO title="reactywny.pl - Polityka Prywatności" />
    <PageHeader />
    <PrivacyWrapper />
    <PageFooter />
  </>
);

export default PrivacyPage;
