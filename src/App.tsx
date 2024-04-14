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
import JobsPopup from './components/Popups/JobsPopup';
import PhotoPopup from './components/Popups/PhotoPopup';
import MailPopup from './components/Popups/MailPopup';
import PandaPopup from './components/Popups/PandaPopup';
import TrashPopup from './components/Popups/TrashPopup';

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
import Jobs from './assets/Jobs.png';
import Photo from './assets/Photos.png';
import Mail from './assets/Mail.png';
import Panda from './assets/Panda.png';
import Trash from './assets/Trash.png';

const App: React.FC = () => {

  useEffect(() => {
    document.title = 'C:\\Users\\gustavoBorges';
  }, []);

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
          <S.IconGrid>
            <S.IconTextContainer>
              <IconComponent imageUrl={About} imageSize="5vw" onIconClick={() => handleIconClick(<AboutPopup onClose={handleClosePopup} />)} />
              <S.IconText>sobre.txt</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Portfolio} imageSize="5vw" onIconClick={() => handleIconClick(<PortfolioPopup onClose={handleClosePopup} />)} />
              <S.IconText>portfolio</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Conctact} imageSize="5vw" onIconClick={() => handleIconClick(<ConctactPopup onClose={handleClosePopup} />)} />
              <S.IconText>contato</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Curiosities} imageSize="5vw" onIconClick={() => handleIconClick(<CuriositiesPopup onClose={handleClosePopup} />)} />
              <S.IconText>curiosidades</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Midias} imageSize="5vw" onIconClick={() => handleIconClick(<MidiasPopup onClose={handleClosePopup} />)} />
              <S.IconText>midias</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Curriculum} onIconClick={() => handleIconClick(<CurriculumPopup onClose={handleClosePopup} />)} />
              <S.IconText>curriculo.pdf</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Info} onIconClick={() => handleIconClick(<InfoPopup onClose={handleClosePopup} />)} />
              <S.IconText>info</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Entertainment} onIconClick={() => handleIconClick(<EntertainmentPopup onClose={handleClosePopup} />)} />
              <S.IconText>entretenimento</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Pastel} onIconClick={() => handleIconClick(<PastelPopup onClose={handleClosePopup} />)} />  
              <S.IconText>pastel</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={RA} onIconClick={() => handleIconClick(<RAPopup onClose={handleClosePopup} />)} />
              <S.IconText>achievements</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Jobs} onIconClick={() => handleIconClick(<JobsPopup onClose={handleClosePopup} />)} />
              <S.IconText>exp.zip</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Photo} onIconClick={() => handleIconClick(<PhotoPopup onClose={handleClosePopup} />)} />
              <S.IconText>images</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Mail} onIconClick={() => handleIconClick(<MailPopup onClose={handleClosePopup} />)} />
              <S.IconText>mail</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Panda} onIconClick={() => handleIconClick(<PandaPopup onClose={handleClosePopup} />)} />
              <S.IconText>???</S.IconText>
            </S.IconTextContainer>
            <S.IconTextContainer>
              <IconComponent imageUrl={Trash} onIconClick={() => handleIconClick(<TrashPopup onClose={handleClosePopup} />)} />
              <S.IconText>$recycle.bin</S.IconText>
            </S.IconTextContainer>
          </S.IconGrid>
        <S.TextContainer> {/* Container para o texto */}
        <p>© 2024 Gustavo Borges</p>
        </S.TextContainer>
        {selectedPopup && (
          <div ref={popupRef} className="popup">
            {selectedPopup}
          </div>
        )}
    </S.PageContainer>
    </>
  );
};

export default App;