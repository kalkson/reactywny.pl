import React from 'react';
import PageHeader from '../components/organisms/PageHeader/PageHeader';
import PageFooter from '../components/molecules/PageFooter/PageFooter';
import PrivacyWrapper from '../components/pages/PrivacyPage/PrivacyWrapper';
import SEO from '../seo/SEO';

const PrivacyPage = () => (
  <>
    <SEO title="reactywny.pl - Polityka Prywatności" />
    <PageHeader />
    <PrivacyWrapper />
    <PageFooter />
  </>
);

export default PrivacyPage;
