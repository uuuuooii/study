'use client';

import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    const getPost = async () => {
      const res = await fetch('http://localhost:3000/api/posts');
      console.log(res.json());
    };
    getPost();
  }, []);
  return (
    <div>{ }</div>
  );
};
export default Main;