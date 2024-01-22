import React, { cache, useEffect, useState } from 'react';
import LestElement from '@/components/listElement';
import { PostContentPsops } from '@/lib/api/dto';
import { getMusicContents } from '@/lib/api/music';

const Preview = () => {
  const [musicData, setMusicData] = useState<PostContentPsops[]>([]);

  useEffect(() => {
    const getMusicData = cache(async () => {
      const res = await getMusicContents();
      setMusicData(res.data);
    });

    getMusicData();
  }, []);
  return (
    <div>
      <LestElement musicData={musicData} isAdmin />
    </div>
  );
};

export default Preview;