import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  getCourseAnalytics,
  getOrderAnalytics,
  getUserAnalytics,
} from "../controllers/analytics.controller";
import { updateAccessToken } from "../controllers/user.controller";

const analyticsRoute = express.Router();

analyticsRoute.get(
  "/get-user-analytics",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getUserAnalytics,
);

analyticsRoute.get(
  "/get-course-analytics",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getCourseAnalytics,
);

analyticsRoute.get(
  "/get-order-analytics",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getOrderAnalytics,
);

export default analyticsRoute;
