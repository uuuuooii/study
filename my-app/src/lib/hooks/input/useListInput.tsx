'use client';

import { ChangeEvent, useState } from 'react';

const useListInput = () => {
  const [inputListValue, setInputListValue] = useState({
    title: [],
    playTime: [],
  });

  const onChangeListInput = (e: ChangeEvent<HTMLInputElement>, filed: string) => {
    const inputValue = e.target.value;
    const inputArray = inputValue.split(',');

    setInputListValue((prev) => ({ ...prev, [filed]: inputArray }));
  };
  return { inputListValue, onChangeListInput };
};

export default useListInput;