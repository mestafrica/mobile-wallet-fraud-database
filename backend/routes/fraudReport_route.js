import { Router } from "express";

import {
  addFraudReport,
  checkANumber,
  deleteFraudReport,
  updateFraudReport,
  getAFraudReport,
} from "../controllers/fraudReport_controller.js";

import { isAuthenticated } from "../middlewares/auth.js";

export const fraudReportRouter = Router();

fraudReportRouter.post("/api/fraud/report", isAuthenticated, addFraudReport);

fraudReportRouter.delete(
  "/api/fraud/reports/delete/:reportId",
  isAuthenticated,
  deleteFraudReport
);

fraudReportRouter.put(
  "/api/fraud/reports/update/:reportId",
  isAuthenticated,
  updateFraudReport
);
fraudReportRouter.put(
  "/api/fraud/reports/update/:reportId",
  isAuthenticated,
  updateFraudReport
);

fraudReportRouter.get(
  "/api/fraud/reports/:reportId",
  isAuthenticated,
  getAFraudReport
);

fraudReportRouter.get("/api/fraud/check/:phone", isAuthenticated, checkANumber);
