import React, { useState, useRef, useEffect } from 'react';
import * as S from './styles';

import IconComponent from './components/IconComponent';
import AboutPopup from './components/Popups/AboutPopup';

import About from './assets/About.png';

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
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        <IconComponent imageUrl={About} onIconClick={() => handleIconClick(<AboutPopup />)} />
        {/* Adicione mais ícones e componentes de popup aqui */}
      </div>
      {selectedPopup && (
        <S.PopupContainer ref={popupRef} className="popup">
          {selectedPopup}
          <button onClick={handleClosePopup}>Fechar</button>
        </S.PopupContainer>
      )}
    </div>
  );
};

export default App;
