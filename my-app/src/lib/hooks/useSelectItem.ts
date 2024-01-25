import { ChangeEvent, useState } from 'react';
import { PostContentPsops } from '../api/dto';

const useSelecteItem = () => {
  const [selecteItem, setSelecteItem] = useState<PostContentPsops>();

  const onClickSelecteItem = (item: PostContentPsops) => {
    setSelecteItem(item);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSelecteItem(e.target.value);
  };

  return { selecteItem, onClickSelecteItem, onChangeInput };
};

export default useSelecteItem;
