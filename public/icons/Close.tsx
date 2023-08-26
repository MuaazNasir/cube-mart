import { XCircle } from 'lucide-react';
import IconTypes from '../../types/Icontypes';
import { FC } from 'react';

const CloseIcon : FC<IconTypes> = ({className,size,color,clickValue}) => {
  return (
    <XCircle className={className} onClick={clickValue} size={size} color={color}/>
  );
};

export default CloseIcon;
