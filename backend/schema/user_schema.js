import Joi from "joi";

export const userSchema = Joi.object({
  firstName: Joi.string().required().max(255),

  lastName: Joi.string().required().max(255),

  email: Joi.string().lowercase().email().required(),

  phoneNumber: Joi.string()
    .pattern(/^0\d{9}$/)
    .message("Invalid Phone Number"),

  password: Joi.string()
    .min(8)
    .pattern(/[0-9]/)
    .message(
      "Password must be at least 8 characters long and include at least one number."
    )
    .required(),
});

export const passwordSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .messages({
      "string.min": "Password must be at least 8 characters long.",
    })
    .pattern(/[0-9]/)
    .messages({
      "string.pattern.base": "Password must include at least one number.",
    })
    .required()
    .messages({
      "any.required": "Password is required.",
    }),
});
