// IconComponent.tsx
import React from 'react';

interface IconProps {
  imageUrl: string;
  onIconClick: () => void;
  imageSize?: string;
}

const IconComponent: React.FC<IconProps> = ({ imageUrl, onIconClick, imageSize }) => {
  return (
    <div onClick={onIconClick}>
      <img src={imageUrl} alt="Ícone" style={{ width: imageSize, height: imageSize }} />
    </div>
  );
};

export default IconComponent;
