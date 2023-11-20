import React from 'react';
import Image from 'next/image';
import * as S from './style';

const Visual = () => {
  return (
    <section>
      <S.Picture>
        <Image src="/images/visual/22_Instacart_Tee.jpg" alt="visual" fill />
      </S.Picture>
      <S.TitleWrap>
        <S.Title>Music</S.Title>
        <S.Desc>Music is my life</S.Desc>
      </S.TitleWrap>
    </section>
  );
};

export default Visual;