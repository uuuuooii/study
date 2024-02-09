'use client';

import React, { useState, useEffect, cache } from 'react';
import Image from 'next/image';
import { GrPlayFill } from 'react-icons/gr';
import { PostContentPsops } from '@/lib/api/dto';
import { getDetailMusicData } from '@/lib/api/music';
import Inner from '@/components/inner';
import * as S from './style';

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

  return (
    <S.Container>
      <Inner>
        <S.ContentWrap>
          <div>
            {detailData && <Image src={String(detailData.img)} alt="music" width={240} height={240} />}
          </div>
          <S.TextContent>
            <S.Title>{detailData?.title}</S.Title>
            <S.Desc>
              싱글 &#8231;
              {detailData?.desc}
              &#8231; 2023
            </S.Desc>
            <S.Desc>
              1곡 &#8231; 3분 34초
            </S.Desc>
          </S.TextContent>
        </S.ContentWrap>

        <S.PlayWrap>
          <S.Button>
            <GrPlayFill />
            재생
          </S.Button>
          {detailData?.playList ? (
            <div>
              {detailData?.playList.map((item, index) => (
                <>
                  <S.PlayTitle>
                    {index}
                    {item.title}
                  </S.PlayTitle>
                  <S.Desc>
                    {item.playTime}
                  </S.Desc>
                </>
              ))}
            </div>
          ) : (
            <S.PlayContent>
              <S.PlayTitle>
                1.
                {detailData?.desc}
              </S.PlayTitle>
              <S.Desc>
                3분 34초
              </S.Desc>
            </S.PlayContent>
          )}
        </S.PlayWrap>
      </Inner>
    </S.Container>
  );
};

export default Detail;