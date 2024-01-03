import React, { ReactNode } from 'react';
import InputStyle from './style';

interface InputProps {
  children: ReactNode;
  placeholder: string;
}

const Input = ({ children, placeholder }: InputProps) => {
  return (
    <InputStyle placeholder={placeholder}>{children}</InputStyle>
  );
};

export default Input;