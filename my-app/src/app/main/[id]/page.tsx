'use client';

import React, { useState, useEffect, cache } from 'react';
import { PostContentPsops } from '@/lib/api/dto';
import { getDetailMusicData } from '@/lib/api/music';

interface DetailProps {
  params: { id: string; };
}

const Detail = ({ params: { id } }: DetailProps) => {
  const [detailData, setDetailData] = useState<PostContentPsops>();

  useEffect(() => {
    const getDetailData = cache(async () => {
      const res = await getDetailMusicData(id);
      setDetailData(res.data);
    });

    getDetailData();
  }, []);
  console.log(detailData);
  return (
    <div>
      <p>{detailData?.title}</p>
      <p>{detailData?.desc}</p>
    </div>
  );
};

export default Detail;