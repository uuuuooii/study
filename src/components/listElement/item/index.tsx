import Image from 'next/image';
import React from 'react';
import { IoMdPlay } from 'react-icons/io';
import Link from 'next/link';
import { PostContentPsops } from '@/lib/api/dto';
import { event } from '@/lib/gtag';
import * as S from './style';

interface ItemProps {
  item: PostContentPsops;
  isAdmin?: boolean;
  editItem?: {
    selecteItem: PostContentPsops | undefined;
    onClickSelecteItem: (item: PostContentPsops) => void;
  };
  handleDelete?: (id: string) => Promise<void>;
}

const Item = ({
  item, isAdmin, editItem, handleDelete
}: ItemProps) => {
  return (
    <li>
      {isAdmin && (
        <S.EditButton>
          <S.Edit onClick={() => editItem?.onClickSelecteItem(item)}>수정</S.Edit>
          <S.Delete onClick={() => handleDelete && `${handleDelete(String(item._id))}`}>삭제</S.Delete>
        </S.EditButton>
      )}
      <Link
        href={`main/${item._id}`}
        onClick={() => {
          console.log('클릭');
          event({
            action: 'listElement 클릭',
            category: '카케고리 이름',
            label: '라벨 이름',
          });
        }}
        className="click"
      >
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