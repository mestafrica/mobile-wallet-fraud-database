import Joi from "joi";
import sanitizeHtml from "sanitize-html";

export const fraudReportSchema = Joi.object({
  phoneNumber: Joi.string()
    .pattern(/^0\d{9}$/)
    .message("Invalid Phone Number"),

  network: Joi.string().valid("mtn", "vodafone", "airtel-tigo"),

  dateReported: Joi.date().default(Date.now),

  dateOfIncidence: Joi.date().custom((value, helpers) => {
    const { dateReported } = helpers.state.ancestors[0];

    if (dateReported && value > dateReported) {
      return helpers.message(
        "Date of Incidence cannot be after the Date Reported"
      );
    }
    return value;
  }),

  status: Joi.string().valid("private", "public"),

  comment: Joi.string()
    .max(500)
    .custom((value, helpers) => {
      const sanitizedValue = sanitizeHtml(value, {
        allowedTags: [], // Disallow all HTML tags
        allowedAttributes: {}, // Disallow all attributes
      });
      return sanitizedValue;
    }),
});
