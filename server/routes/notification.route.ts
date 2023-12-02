import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  getNotifications,
  updateNotificationStatus,
} from "../controllers/notification.controller";
import { updateAccessToken } from "../controllers/user.controller";

const notificationRoute = express.Router();

notificationRoute.get(
  "/get-all-notifications",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getNotifications,
);

notificationRoute.put(
  "/update-notification-status/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  updateNotificationStatus,
);

export default notificationRoute;
