'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { PiMusicNoteFill } from 'react-icons/pi';
import * as S from './style';

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const scrollHandler = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 30) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <S.Header isShow={isShow}>
      <S.Wrapper isShow={isShow}>
        <h1>
          <Link href="/">
            <p>Music</p>
          </Link>
        </h1>
        <nav>
          <PiMusicNoteFill />
        </nav>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;