import React from 'react';
import Item from './item';
import { PostContentPsops } from '@/lib/api/dto';
import List from './style';

interface LestElementProps {
  musicData: PostContentPsops[];
  isAdmin?: boolean;
}

const LestElement = ({ musicData, isAdmin }: LestElementProps) => {
  return (
    <List>
      {musicData.map((item) => (
        <Item item={item} key={item._id} isAdmin={isAdmin} />
      ))}
    </List>

  );
};

export default LestElement;