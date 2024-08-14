import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const apiKeySchema = new Schema(
  {
    apiKeyName: { type: String },
    domain: [{ type: String }],
    apiKey: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

apiKeySchema.index({ user: 1, domain: 1 }, { unique: true });

apiKeySchema.plugin(toJSON);

export const ApiKeyModel = model("ApiKey", apiKeySchema);
