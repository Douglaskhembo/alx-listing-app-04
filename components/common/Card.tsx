// components/common/Card.tsx

import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ image, title}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
