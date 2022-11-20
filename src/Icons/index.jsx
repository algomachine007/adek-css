import React from 'react';
import { Icons } from './icons';

const IconComponent = ({ name = '' }) => <img src={Icons[name]} alt='' />;

export default IconComponent;
