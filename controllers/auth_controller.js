const AuthModel = require("../models/auth_model");
const Validator = require("node-input-validator");
// ===================================JOIN==========================================================
exports.join = async (req, res, next) => {
  const name = req.body.name;
  const type = req.body.type;
  const validator = new Validator.Validator(req.body, {
    name: "required",
    type: "required",
  });

  const matched = await validator.check();

  if (!matched) {
    const error = Object.values(validator.errors)[0].message;
    return res.status(200).json({ success: false, message: error });
  }

  try {
    const data = await AuthModel.create({ name, type });

    return res.status(201).json({
      success: true,
      message: "Joined successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
