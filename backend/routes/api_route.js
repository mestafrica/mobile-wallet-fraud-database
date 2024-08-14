import { Router } from "express";
import { deleteApi, generateApiKey,updateApiDomain } from "../controllers/api_controller.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { apiKeyRateLimiter } from "../Utils/api_key_rate_limiter.js";

export const apiRouter = Router();

apiRouter.post(
  "/api/keys/generate",
  isAuthenticated,
  apiKeyRateLimiter,
  generateApiKey
);


apiRouter.put("/api/keys/restrict/:keyId", isAuthenticated, updateApiDomain);

   
apiRouter.delete("/api/keys/:id", isAuthenticated, deleteApi)

