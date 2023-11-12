'use client';

import React, { cache, useEffect } from 'react';
import getBlogContents from '@/lib/api/blog';

const Main = () => {
  useEffect(() => {
    const getBlogData = cache(async () => {
      const res = await getBlogContents();
      console.log(res.data);
    });

    getBlogData();
  }, []);
  return (
    <div>Main</div>
  );
};
export default Main;