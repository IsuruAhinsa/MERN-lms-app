import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createLayout, editLayout } from "../controllers/layout.controller";

const layoutRoute = express.Router();

layoutRoute.post(
  "/create-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  createLayout,
);

layoutRoute.put(
  "/edit-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  editLayout,
);

export default layoutRoute;
