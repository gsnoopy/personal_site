// App.tsx
import React, { useState, useRef, useEffect } from 'react';
import * as S from './styles'; // Importando estilos
import IconComponent from './components/IconComponent';
import AboutPopup from './components/Popups/AboutPopup';
import ConctactPopup from './components/Popups/ConctactPopup';
import CuriositiesPopup from './components/Popups/CuriositiesPopup';
import CurriculumPopup from './components/Popups/CurriculumPopup';
import EntertainmentPopup from './components/Popups/EntertainmentPopup';
import InfoPopup from './components/Popups/InfoPopup';
import MidiasPopup from './components/Popups/MidiasPopup';
import PastelPopup from './components/Popups/PastelPopup';
import PortfolioPopup from './components/Popups/PortfolioPopup';
import RAPopup from './components/Popups/RAPopup';

import About from './assets/About.png';
import Conctact from './assets/Conctact.png';
import Curiosities from './assets/Curiosities.png';
import Curriculum from './assets/Curriculum.png';
import Entertainment from './assets/Entertainment.png';
import Info from './assets/Info.png';
import Midias from './assets/Midias.png';
import Pastel from './assets/Pastel.png';
import Portfolio from './assets/Portfolio.png';
import RA from './assets/RA.png';

const App: React.FC = () => {
  const [selectedPopup, setSelectedPopup] = useState<React.ReactNode | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleIconClick = (popup: React.ReactNode) => {
    setSelectedPopup(popup);
  };

  const handleClosePopup = () => {
    setSelectedPopup(null);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setSelectedPopup(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <S.PageContainer>
        <S.FlexContainer> {/* Container flexível para centralizar horizontalmente */}
          <S.IconGrid>
            <IconComponent imageUrl={About} onIconClick={() => handleIconClick(<AboutPopup />)} />
            <IconComponent imageUrl={Portfolio} onIconClick={() => handleIconClick(<PortfolioPopup />)} />
            <IconComponent imageUrl={Conctact} onIconClick={() => handleIconClick(<ConctactPopup />)} />
            <IconComponent imageUrl={Curiosities} onIconClick={() => handleIconClick(<CuriositiesPopup />)} />
            <IconComponent imageUrl={Midias} onIconClick={() => handleIconClick(<MidiasPopup />)} />
            <IconComponent imageUrl={Curriculum} onIconClick={() => handleIconClick(<CurriculumPopup />)} />
            <IconComponent imageUrl={Info} onIconClick={() => handleIconClick(<InfoPopup />)} />
            <IconComponent imageUrl={Entertainment} onIconClick={() => handleIconClick(<EntertainmentPopup />)} />
            { /*<IconComponent imageUrl={Pastel} onIconClick={() => handleIconClick(<PastelPopup />)} /> */}
            <IconComponent imageUrl={RA} imageSize="50%" onIconClick={() => handleIconClick(<RAPopup />)} />
          </S.IconGrid>
        </S.FlexContainer>
        {selectedPopup && (
          <S.PopupContainer ref={popupRef} className="popup">
            {selectedPopup}
            <button onClick={handleClosePopup}>Fechar</button>
          </S.PopupContainer>
        )}
      </S.PageContainer>
    </>
  );
};

export default App;
