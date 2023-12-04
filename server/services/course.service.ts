import { NextFunction, Response, Request } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import courseModel from "../models/course.model";

// create course
export const createCourse = CatchAsyncError(
  async (data: any, res: Response) => {
    const course = await courseModel.create(data);
    res.status(201).json({
      success: true,
      course,
    });
  }
);

// get all courses
export const getAllCoursesService = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const courses = await courseModel.find();

    res.status(200).json({
      success: true,
      courses,
    });
  }
);
