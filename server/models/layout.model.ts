import { Schema, Document, model } from "mongoose";

interface IFAQItem extends Document {
  question: string;
  answer: string;
}

interface ICategory extends Document {
  title: string;
}

interface IBannerImage extends Document {
  public_id: string;
  url: string;
}

interface ILayout extends Document {
  type: string;
  faq: IFAQItem[];
  categories: ICategory[];
  banner: {
    image: IBannerImage;
    title: string;
    subTitle: string;
  };
}

const faqSchema = new Schema<IFAQItem>({
  question: String,
  answer: String,
});

const categorySchema = new Schema<ICategory>({
  title: String,
});

const bannerImageSchema = new Schema<IBannerImage>({
  public_id: String,
  url: String,
});

const layoutSchema = new Schema<ILayout>({
  type: String,
  faq: [faqSchema],
  categories: [categorySchema],
  banner: {
    image: bannerImageSchema,
    title: String,
    subTitle: String,
  },
});

const layoutModel = model<ILayout>("Layout", layoutSchema);
export default layoutModel;
