import React from 'react';
import styled from 'styled-components';

interface TrashPopupProps {
  onClose: () => void;
}

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* Defina um valor alto para garantir que o popup seja exibido acima dos ícones */
  background-color: #f0f0f0;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  max-width: 400px;
`;

const Title = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-family: Arial, sans-serif;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const TrashPopup: React.FC<TrashPopupProps> = ({ onClose }) => {
  return (
    <PopupContainer>
      <Title>Trash</Title>
      <Content>Este é o conteúdo do nono popup.</Content>
      <CloseButton onClick={onClose}>Fechar</CloseButton>
    </PopupContainer>
  );
};

export default TrashPopup;
