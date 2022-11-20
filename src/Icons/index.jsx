import React from 'react';
import { Icons } from './icons';

const IconComponent = ({ name = '' }) => {
  const icon = Icons[name];

  return <img src={icon} alt='' />;
};

export default IconComponent;
