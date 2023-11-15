'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Header = styled.header<{ isShow: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  padding: 0 33px;
  transition: opacity 0.2s ease-out, background-color 0.5s ease-out,
    color 0.5s ease-out, max-height 1s ease-out;

  ${({ isShow }) =>
    isShow &&
    css`
      justify-content: center;
    `}
`;

export const Wrapper = styled.div<{ isShow: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ isShow }) => (isShow ? '50rem' : '100%')};
  transition: 1s;

  ${({ isShow }) =>
    isShow &&
    css`
      height: 3.3rem;
      padding: 0 30px;
      background: rgb(28, 28, 28);
      border-radius: 60px;
    `}
`;
