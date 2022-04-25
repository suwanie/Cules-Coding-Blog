import mongoose, { Schema, model } from "mongoose";

// 이렇게 할 수 있구나 ..
const stringRequired = {
  type: String,
  required: true,
};

const schema = new Schema({
  title: stringRequired,
  description: stringRequired,
  slug: stringRequired,
  content: stringRequired,
  banner: stringRequired,
  altText: stringRequired,
  readingTime: stringRequired,
  customID: stringRequired,
  // customID 가 필요없이 걍 _id를 하면 된다?
  createdAt: {
    type: Date,
    default: Date.now,
  },
  totalViews: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.blog || model("blog", schema);
