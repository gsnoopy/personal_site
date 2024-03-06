// IconComponent.tsx
import React from 'react';

interface IconProps {
  imageUrl: string;
  onIconClick: () => void;
}

const IconComponent: React.FC<IconProps> = ({ imageUrl, onIconClick }) => {
  return (
    <div onClick={onIconClick}>
      <img src={imageUrl} alt="Ícone" />
    </div>
  );
};

export default IconComponent;
