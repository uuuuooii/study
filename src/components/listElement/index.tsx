import React from 'react';
import { PostContentPsops } from '@/lib/api/dto';
import Item from './item';
import List from './style';

interface LestElementProps {
  musicData: PostContentPsops[];
  isAdmin?: boolean;
  editItem?: {
    selecteItem: PostContentPsops | undefined;
    onClickSelecteItem: (item: PostContentPsops) => void;
  };
  handleDelete?: (id: string) => Promise<void>;
}

const LestElement = ({
  musicData, isAdmin, editItem, handleDelete
}: LestElementProps) => {
  return (
    <List>
      {musicData.map((item) => (
        <Item
          item={item}
          key={item._id}
          isAdmin={isAdmin}
          editItem={editItem}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
};

export default LestElement;