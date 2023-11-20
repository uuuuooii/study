'use client';

import React, { cache, useEffect } from 'react';
import getBlogContents from '@/lib/api/blog';
import Visual from './visual';
import Section from './style';

const Main = () => {
  useEffect(() => {
    const getBlogData = cache(async () => {
      const res = await getBlogContents();
      console.log(res.data);
    });

    getBlogData();
  }, []);

  return (
    <Section>
      <Visual />
    </Section>
  );
};
export default Main;