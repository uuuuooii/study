'use client';

import React from 'react';
import useInput from '@/lib/hooks/input/useInput';
import InputStyle from '@/components/input/style';
import useListInput from '@/lib/hooks/input/useListInput';
import Wrap from './style';

const Admin = () => {
  const titleInput = useInput();
  const descInput = useInput();
  const imgInput = useInput();
  const playTimeInput = useInput();
  const albumTypeInput = useInput();
  const yearInput = useInput();
  const listInput = useListInput();

  console.log(listInput.inputListValue);
  console.log(yearInput.inputValue);

  return (
    <Wrap>
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
    </Wrap>
  );
};

export default Admin;