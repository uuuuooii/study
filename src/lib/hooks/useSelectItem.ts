import { useState } from 'react';
import { PostContentPsops } from '../api/dto';

const useSelecteItem = () => {
  const [selecteItem, setSelecteItem] = useState<PostContentPsops>();

  const onClickSelecteItem = (item: PostContentPsops) => {
    setSelecteItem(item);
  };

  return { selecteItem, onClickSelecteItem };
};

export default useSelecteItem;
