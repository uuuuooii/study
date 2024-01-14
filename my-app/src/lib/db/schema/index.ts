import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    playTime: {
      type: String,
    },
    year: {
      type: String,
    },
    albumType: {
      type: String,
    },
    playList: {
      type: [{ title: [], playTime: [] }],
    },
  },
  { timestamps: true }
);
export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);
