'use client';

import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    const apiTest = async () => {
      const res = await fetch('http://localhost:3000/api/posts');
      console.log(res.json());
    };
    apiTest();
  }, []);
  return (
    <div>Main</div>
  );
};
export default Main;