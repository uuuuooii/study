'use client';

import React, {
  ChangeEvent
} from 'react';
import useInput from '@/lib/hooks/input/useInput';
import InputStyle from '@/components/input/style';
import useListInput from '@/lib/hooks/input/useListInput';
import { deleteMusicData, postMusicData, putMusicData } from '@/lib/api/music';
import useSelecteItem from '@/lib/hooks/useSelectItem';
import Preview from './preview';
import * as S from './style';

const Admin = () => {
  const titleInput = useInput();
  const descInput = useInput();
  const imgInput = useInput();
  const playTimeInput = useInput();
  const yearInput = useInput();
  const albumTypeInput = useInput();
  const listInput = useListInput();
  const editItem = useSelecteItem();

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    if (editItem.selecteItem) {
      if (name === 'title') {
        editItem.selecteItem.title = e.currentTarget.value;
      }
      if (name === 'desc') {
        editItem.selecteItem.desc = e.currentTarget.value;
      }
      if (name === 'img') {
        editItem.selecteItem.img = e.currentTarget.value;
      }
      if (name === 'playTime') {
        editItem.selecteItem.playTime = e.currentTarget.value;
      }
      if (name === 'year') {
        editItem.selecteItem.year = e.currentTarget.value;
      }
      if (name === 'albumType') {
        editItem.selecteItem.albumType = e.currentTarget.value;
      }
    }
  };

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

  const onSubmitEdit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editItem.selecteItem) {
      const editData = {
        id: editItem.selecteItem._id,
        title: editItem.selecteItem.title,
        desc: editItem.selecteItem.desc,
        img: editItem.selecteItem.img,
        playTime: editItem.selecteItem.playTime,
        year: editItem.selecteItem.year,
        albumType: editItem.selecteItem.albumType,
        playList: [{
          title: listInput.inputListValue.title,
          playTime: listInput.inputListValue.playTime
        }]
      };

      const res = await putMusicData(editData);
      if (res.data) {
        alert('수정되었습니다');
      }
    }
  };

  const handleSubmit = editItem.selecteItem ? onSubmitEdit : onSubmit;

  const handleDelete = async (id: string) => {
    await deleteMusicData(id);
    alert('삭제 되었습니다');
  };

  return (
    <S.Container>
      <Preview
        handleDelete={handleDelete}
        editItem={editItem}
      />

      <form onSubmit={handleSubmit}>
        <S.Wrap>
          <InputStyle
            value={editItem?.selecteItem?.title || titleInput.inputValue}
            onChange={(e) => { onChangeInput(e, 'title'); titleInput.onChangeInput(e); }}
            type="text"
            placeholder="title"
          />
          <InputStyle
            value={editItem?.selecteItem?.desc || descInput.inputValue}
            onChange={(e) => { onChangeInput(e, 'desc'); descInput.onChangeInput(e); }}
            type="text"
            placeholder="desc"
          />
          <InputStyle
            value={editItem?.selecteItem?.img || imgInput.inputValue}
            onChange={(e) => { onChangeInput(e, 'img'); imgInput.onChangeInput(e); }}
            type="text"
            placeholder="img"
          />
          <InputStyle
            value={editItem?.selecteItem?.playTime || playTimeInput.inputValue}
            onChange={(e) => { onChangeInput(e, 'playTime'); playTimeInput.onChangeInput(e); }}
            type="text"
            placeholder="playTime"
          />
          <InputStyle
            value={editItem?.selecteItem?.albumType || albumTypeInput.inputValue}
            onChange={(e) => { onChangeInput(e, 'albumType'); albumTypeInput.onChangeInput(e); }}
            type="text"
            placeholder="albumType"
          />
          <InputStyle
            value={editItem?.selecteItem?.year || yearInput.inputValue}
            onChange={(e) => { onChangeInput(e, 'year'); yearInput.onChangeInput(e); }}
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
          <S.Submit type="submit">전송</S.Submit>
        </S.Wrap>
      </form>
    </S.Container>

  );
};

export default Admin;