import crypto from "crypto";

export const generateKey = () => {
  return crypto.randomBytes(32).toString("hex");
};
