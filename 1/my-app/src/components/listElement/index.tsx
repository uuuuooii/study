import React from 'react';
import Link from 'next/link';
import Item from './item';
import { PostContentPsops } from '@/lib/api/dto';
import List from './style';

interface LestElementProps {
  musicData: PostContentPsops[];
}

const LestElement = ({ musicData }: LestElementProps) => {
  return (
    <Link href="#!">
      <List>
        {musicData.map((item) => (
          <Item item={item} />))}
      </List>
    </Link>
  );
};

export default LestElement;