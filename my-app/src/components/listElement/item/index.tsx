import Image from 'next/image';
import React from 'react';
import { IoMdPlay } from 'react-icons/io';
import Link from 'next/link';
import { PostContentPsops } from '@/lib/api/dto';
import * as S from './style';

interface ItemProps {
  item: PostContentPsops;
  isAdmin?: boolean;
}

const Item = ({ item, isAdmin }: ItemProps) => {
  return (
    <li>
      <Link href={`main/${item._id}`}>
        <S.Figure>
          <S.ImageWrap>
            <Image src={item.img} alt="music" width={180} height={180} />
            {isAdmin && (
              <S.AdminIconWrap>
                <S.AdminIcon>
                  <Image src="/images/svg/editeIcon.svg" alt="thumbnail-image" fill />
                </S.AdminIcon>
                <S.AdminIcon>
                  <Image src="/images/svg/deleteIcon.svg" alt="thumbnail-image" fill />
                </S.AdminIcon>
              </S.AdminIconWrap>
            )}
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