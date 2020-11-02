import React from 'react';
import Headline from 'components/Headline/Headline';
import QuoteIcon from 'assets/svg/quote-icon.svg';
import StyledMissionSection from './MissionSection.styled';

const MissionSection = () => {
  return (
    <StyledMissionSection>
      <Headline size={54}>Misja</Headline>
      <p className="mission-section__paragraph">
        <QuoteIcon className="mission-section__paragraph__icon" />
        Jako dziecko patrzył z fascynacją w działanie Internetu, nie będąc
        świadomym, że za każdym razem ładując stronę dostaje kod 200 protokołu
        HTTP. Lata temu miał marzenie, by tworzyć coś z niczego, by tworzyć tak
        piękne strony internetowe jakie codziennie widział i zastanawiał się jak
        to wszystko powstaje i co trzeba, by osiągnąć taki poziom. Dziś spełnia
        swoje marzenie i znalazł się tutaj, by dzielić się tą wiedzą ze światem,
        ale i żeby się wciąż rozwijać - taka misja przysługuje temu blogowi.
      </p>
    </StyledMissionSection>
  );
};

export default MissionSection;
