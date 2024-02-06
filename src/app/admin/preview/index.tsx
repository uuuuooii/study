import React, { cache, useEffect, useState } from 'react';
import LestElement from '@/components/listElement';
import { PostContentPsops } from '@/lib/api/dto';
import { getMusicContents } from '@/lib/api/music';

interface PreviewProps {
  editItem: {
    selecteItem: PostContentPsops | undefined;
    onClickSelecteItem: (item: PostContentPsops) => void;
  };
  handleDelete: (id: string) => Promise<void>;
}

const Preview = ({ editItem, handleDelete }: PreviewProps) => {
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
      <LestElement musicData={musicData} editItem={editItem} handleDelete={handleDelete} isAdmin />
    </div>
  );
};

export default Preview;