import ReactIllustration from 'assets/svg/meta/react-big.svg';
import React from 'react';

import StyledMissionSection from './MissionSection.styled';

const MissionSection = () => {
  return (
    <StyledMissionSection className="container mission">
      <ReactIllustration className="mission__illustration" />
      <div className="row">
        <div className="col-md-9 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <p className="mission__paragraph">
            Jako dziecko patrzył z fascynacją w działanie Internetu, nie będąc
            świadomym, że za każdym razem ładując stronę dostaje kod 200
            protokołu HTTP. Lata temu miał marzenie, by tworzyć coś z niczego,
            by tworzyć tak piękne strony internetowe jakie codziennie widział. I
            zastanawiał się jak to wszystko powstaje i co trzeba, by osiągnąć
            taki poziom. Dziś spełnia swoje marzenie i znalazł się tutaj, by
            dzielić się tą wiedzą ze światem. Ale także po to, by się wciąż
            rozwijać - taka misja przysługuje temu blogowi.
          </p>
        </div>
      </div>
    </StyledMissionSection>
  );
};

export default MissionSection;
