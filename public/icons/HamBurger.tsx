import { AlignRight } from 'lucide-react';
import { FC } from 'react';
import IconTypes from '../../types/Icontypes'

const Hamburger : FC<IconTypes> = ({className,size,color,clickValue}) => {
  return (
    <AlignRight className={`${className}`} size={size} color={color} onClick={clickValue}/>
  );
};

export default Hamburger
