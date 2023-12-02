import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  generateVideoUrl,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
import { updateAccessToken } from "../controllers/user.controller";

const courseRouter = express.Router();

courseRouter.post(
  "/create-course", 
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse,
);

courseRouter.put(
  "/edit-course/:id", 
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  editCourse,
);

courseRouter.get("/get-single-course/:id", updateAccessToken, isAuthenticated, getSingleCourse);

courseRouter.get("/get-courses", updateAccessToken, isAuthenticated, getAllCourses);

courseRouter.get("/get-course-content/:id", updateAccessToken, isAuthenticated, getCourseByUser);

courseRouter.put("/add-question", updateAccessToken, isAuthenticated, addQuestion);

courseRouter.put("/add-answer", updateAccessToken, isAuthenticated, addAnswer);

courseRouter.put("/add-review/:id", updateAccessToken, isAuthenticated, addReview);

courseRouter.put(
  "/add-reply-to-review", 
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  addReplyToReview,
);

courseRouter.post(
  "/getVdoCipherOTP", 
  generateVideoUrl
)

courseRouter.delete(
  "/delete-course/:id", 
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  deleteCourse,
);
export default courseRouter;
