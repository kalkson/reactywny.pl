import React from 'react';
import Privacy from './Privacy';
import StyledPrivacyWrapper from './PrivacyWrapper.styled';

const PrivacyWrapper = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#F1EAEA' }}>
      <StyledPrivacyWrapper>
        <Privacy />
      </StyledPrivacyWrapper>
    </div>
  );
};

export default PrivacyWrapper;
