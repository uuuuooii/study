import React from 'react';
import Item from './item';
import { PostContentPsops } from '@/lib/api/dto';
import List from './style';

interface LestElementProps {
  musicData: PostContentPsops[];
  isAdmin?: boolean;
  editItem: {
    selecteItem: PostContentPsops | undefined;
    onClickSelecteItem: (item: PostContentPsops) => void;
  };
}

const LestElement = ({ musicData, isAdmin, editItem }: LestElementProps) => {
  return (
    <List>
      {musicData.map((item) => (
        <Item item={item} key={item._id} isAdmin={isAdmin} editItem={editItem} />
      ))}
    </List>

  );
};

export default LestElement;