import { Router } from "express";
import {
  forgotPassword,
  resetPassword,
  verifyCode,
} from "../controllers/resetPassword_controller.js";

export const passwordRouter = Router();

passwordRouter.post("/api/auth/password/recover", forgotPassword);

passwordRouter.post("/api/auth/password/verify-code", verifyCode);

passwordRouter.post("/api/auth/password/change", resetPassword);
