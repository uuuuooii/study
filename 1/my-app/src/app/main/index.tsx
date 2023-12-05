'use client';

import React, { cache, useEffect, useState } from 'react';
import getBlogContents from '@/lib/api/blog';
import Visual from './visual';
import LestElement from '@/components/listElement';
import Inner from '@/components/inner';
import { PostContentPsops } from '@/lib/api/dto';
import * as S from './style';

const Main = () => {
  const [musicData, setMusicData] = useState<PostContentPsops[]>([]);

  useEffect(() => {
    const getMusicData = cache(async () => {
      const res = await getBlogContents();
      setMusicData(res.data);
    });

    getMusicData();
  }, []);

  return (
    <div>
      <S.VisualSection>
        <Visual />
      </S.VisualSection>
      <section>
        <Inner>
          <S.Title>추천 앨범</S.Title>
          <LestElement musicData={musicData} />
        </Inner>
      </section>
    </div>
  );
};
export default Main;