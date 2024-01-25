import Image from 'next/image';
import React from 'react';
import { IoMdPlay } from 'react-icons/io';
import Link from 'next/link';
import { PostContentPsops } from '@/lib/api/dto';
import * as S from './style';

interface ItemProps {
  item: PostContentPsops;
  isAdmin?: boolean;
  editItem?: {
    selecteItem: PostContentPsops | undefined;
    onClickSelecteItem: (item: PostContentPsops) => void;
  };
}

const Item = ({ item, isAdmin, editItem }: ItemProps) => {
  console.log(editItem);

  return (
    <li>
      {isAdmin && (
        <S.EditButton>
          <S.Edit onClick={() => editItem?.onClickSelecteItem(item)}>수정</S.Edit>
          <S.Delete>삭제</S.Delete>
        </S.EditButton>
      )}
      <Link href={`main/${item._id}`}>
        <S.Figure>
          <S.ImageWrap>
            <Image src={item.img} alt="music" width={180} height={180} />

            <S.Icon>
              <IoMdPlay />
            </S.Icon>
          </S.ImageWrap>
          <figcaption>
            <S.Title>{item.title}</S.Title>
            <S.Desc>{item.desc}</S.Desc>
          </figcaption>
        </S.Figure>
      </Link>
    </li>
  );
};

export default Item;