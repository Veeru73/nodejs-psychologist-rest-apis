const TherapistPatientSessionModel = require("../models/therapist_patient_session_model");
const Validator = require("node-input-validator");
// ===================================postSessionDetail=====================================================
exports.postSessionDetail = async (req, res, next) => {
  const therapist_id = req.body.therapist_id;
  const patient_id = req.body.patient_id;
  const session_date = req.body.session_date;
  const session_start_time = req.body.session_start_time;
  const session_end_time = req.body.session_end_time;

  const validator = new Validator.Validator(req.body, {
    therapist_id: "required",
    patient_id: "required",
    session_date: "required",
    session_start_time: "required",
    session_end_time: "required",
  });

  const matched = await validator.check();

  if (!matched) {
    const error = Object.values(validator.errors)[0].message;
    return res.status(200).json({ success: false, message: error });
  }

  try {
    const data = await TherapistPatientSessionModel.create({
      therapist_id,
      patient_id,
      session_date,
      session_start_time,
      session_end_time,
    });

    return res.status(201).json({
      success: true,
      message: "Session info saved successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
