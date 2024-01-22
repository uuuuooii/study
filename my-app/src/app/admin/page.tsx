'use client';

import React, {
  ChangeEvent, cache, useEffect, useState
} from 'react';
import useInput from '@/lib/hooks/input/useInput';
import InputStyle from '@/components/input/style';
import useListInput from '@/lib/hooks/input/useListInput';
import * as S from './style';
import { getMusicContents, postMusicData } from '@/lib/api/music';
import LestElement from '@/components/listElement';
import { PostContentPsops } from '@/lib/api/dto';

const Admin = () => {
  const [musicData, setMusicData] = useState<PostContentPsops[]>([]);

  const titleInput = useInput();
  const descInput = useInput();
  const imgInput = useInput();
  const playTimeInput = useInput();
  const yearInput = useInput();
  const albumTypeInput = useInput();
  const listInput = useListInput();

  // console.log(listInput.inputListValue);
  // console.log(yearInput.inputValue);

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: titleInput.inputValue,
      desc: descInput.inputValue,
      img: imgInput.inputValue,
      playTime: playTimeInput.inputValue,
      year: yearInput.inputValue,
      albumType: albumTypeInput.inputValue,
      playList: [{
        title: listInput.inputListValue.title,
        playTime: listInput.inputListValue.playTime
      }]
    };

    const res = await postMusicData(data);
    if (res.data) {
      alert('등록 되었습니다');
    }
  };

  useEffect(() => {
    const getMusicData = cache(async () => {
      const res = await getMusicContents();
      setMusicData(res.data);
    });

    getMusicData();
  }, []);
  return (
    <S.Container>
      <div>
        <LestElement musicData={musicData} isAdmin />
      </div>
      <form onSubmit={onSubmit}>
        <S.Wrap>
          <InputStyle
            value={titleInput.inputValue}
            onChange={titleInput.onChangeInput}
            type="text"
            placeholder="title"
          />
          <InputStyle
            value={descInput.inputValue}
            onChange={descInput.onChangeInput}
            type="text"
            placeholder="desc"
          />
          <InputStyle
            value={imgInput.inputValue}
            onChange={imgInput.onChangeInput}
            type="text"
            placeholder="img"
          />
          <InputStyle
            value={playTimeInput.inputValue}
            onChange={playTimeInput.onChangeInput}
            type="text"
            placeholder="playTime"
          />
          <InputStyle
            value={albumTypeInput.inputValue}
            onChange={albumTypeInput.onChangeInput}
            type="text"
            placeholder="albumType"
          />
          <InputStyle
            value={yearInput.inputValue}
            onChange={yearInput.onChangeInput}
            type="text"
            placeholder="year"
          />
          <InputStyle
            value={listInput.inputListValue.title}
            onChange={(e) => listInput.onChangeListInput(e, 'title')}
            type="text"
            placeholder="playList : title"
          />
          <InputStyle
            value={listInput.inputListValue.playTime}
            onChange={(e) => listInput.onChangeListInput(e, 'playTime')}
            type="text"
            placeholder="playList : playTime"
          />
          <button type="submit">전송</button>
        </S.Wrap>
      </form>
    </S.Container>

  );
};

export default Admin;