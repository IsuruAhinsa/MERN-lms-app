import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import cloudinary from "cloudinary";
import layoutModel from "../models/layout.model";

// create layout
export const createLayout = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { type } = req.body;

      const isTypeExist = await layoutModel.findOne({ type });

      if (isTypeExist) {
        return next(new ErrorHandler(`${type} is already exist`, 400));
      }

      if (type === "Banner") {
        const { image, title, subTitle } = req.body;

        const myCloud = await cloudinary.v2.uploader.upload(image, {
          folder: "layout",
        });

        const banner = {
          image: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          },
          title,
          subTitle,
        };

        await layoutModel.create(banner);
      }

      if (type === "FAQ") {
        const { faq } = req.body;

        const faqItems = await Promise.all(
          faq.map(async (item: any) => {
            return {
              question: item.question,
              answer: item.answer,
            };
          }),
        );

        await layoutModel.create({ type: "FAQ", faq: faqItems });
      }

      if (type === "Categories") {
        const { categories } = req.body;

        const categoryItems = await Promise.all(
          categories.map(async (item: any) => {
            return {
              title: item.title,
            };
          }),
        );

        await layoutModel.create({
          type: "Categories",
          categories: categoryItems,
        });
      }

      res.status(200).json({
        success: true,
        message: `${type} Layout created successfully!`,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  },
);

// edit layout
export const editLayout = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { type } = req.body;

      if (type === "Banner") {
        const bannerData: any = await layoutModel.findOne({ type: "Banner" });

        if (bannerData) {
          await cloudinary.v2.uploader.destroy(bannerData?.image.public_id);
        }

        const { image, title, subTitle } = req.body;

        const myCloud = await cloudinary.v2.uploader.upload(image, {
          folder: "layout",
        });

        const banner = {
          image: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          },
          title,
          subTitle,
        };

        await layoutModel.findByIdAndUpdate(bannerData?._id, { banner });
      }

      if (type === "FAQ") {
        const { faq } = req.body;

        const faqData: any = await layoutModel.findOne({ type: "FAQ" });

        const faqItems = await Promise.all(
          faq.map(async (item: any) => {
            return {
              question: item.question,
              answer: item.answer,
            };
          }),
        );

        await layoutModel.findByIdAndUpdate(faqData?._id, {
          type: "FAQ",
          faq: faqItems,
        });
      }

      if (type === "Categories") {
        const { categories } = req.body;

        const categoryData: any = await layoutModel.findOne({
          type: "Categories",
        });

        const categoryItems = await Promise.all(
          categories.map(async (item: any) => {
            return {
              title: item.title,
            };
          }),
        );

        await layoutModel.findByIdAndUpdate(categoryData?._id, {
          type: "Categories",
          categories: categoryItems,
        });
      }

      res.status(200).json({
        success: true,
        message: `${type} Layout updated successfully!`,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  },
);
