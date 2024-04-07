// IconComponent.tsx
import React from 'react';
import styled from 'styled-components';

interface IconProps {
  imageUrl: string;
  onIconClick: () => void;
  imageSize?: string;
}

export const IconImage = styled.img`
  width: 4vw;
  height: auto;

  @media (max-width: 768px) {
    width: 7vw;
  }
  
`;

const IconComponent: React.FC<IconProps> = ({ imageUrl, onIconClick, imageSize }) => {
  return (
    <div onClick={onIconClick}>
      <IconImage src={imageUrl}/>
    </div>
  );
};

export default IconComponent;
