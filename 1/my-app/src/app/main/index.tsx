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
      <S.MusicSection>
        <Inner>
          <LestElement musicData={musicData} />
        </Inner>
      </S.MusicSection>
    </div>
  );
};
export default Main;