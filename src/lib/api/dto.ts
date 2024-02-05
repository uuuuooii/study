export interface PostContentPsops {
  _id?: string;
  title: string;
  desc: string;
  img: string;
  playTime: string;
  year: string;
  albumType: string;
  playList?: {
    title: string[];
    playTime: string[];
  }[];
}
