import { ShoppingCart } from 'lucide-react';
import IconTypes from '../../types/Icontypes';
import { FC } from 'react';

const CartIcon : FC<IconTypes> = ({className,size,color}) => {
  return (
    <ShoppingCart color={color} size={size} className={className} />
  );
};

export default CartIcon;