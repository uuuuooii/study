'use client';

import { ChangeEvent, useState } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return { inputValue, onChangeInput };
};

export default useInput;