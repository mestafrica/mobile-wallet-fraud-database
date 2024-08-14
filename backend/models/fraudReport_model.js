import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const fraudReportSchema = new Schema(
  {
    phoneNumber: { type: String },
    network: { type: String, enum: ["mtn", "vodafone", "airtel-tigo"] },
    dateReported: { type: Date, default: Date.now },
    dateOfIncidence: { type: Date },
    status: { type: String, enum: ["private", "public"] },
    comment: { type: String },
    user: { type: Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

fraudReportSchema.plugin(toJSON);

export const FraudReportModel = model("FraudReport", fraudReportSchema);
