import rateLimit from "express-rate-limit";

export const apiKeyRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 16, // limit each IP to 5 requests per windowMs
  message:
    "Too many API key generation requests from this IP, please try again later.",
});
