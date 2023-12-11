import React from 'react';
import Item from './item';
import { PostContentPsops } from '@/lib/api/dto';
import List from './style';

interface LestElementProps {
  musicData: PostContentPsops[];
}

const LestElement = ({ musicData }: LestElementProps) => {
  return (
    <List>
      {musicData.map((item) => (
        <Item item={item} />
      ))}
    </List>

  );
};

export default LestElement;