const router = require("express").Router();
const therapistPatientSessionController = require("../controllers/therapist_patient_session_controller");

router.post(
  "/postSessionDetail",
  therapistPatientSessionController.postSessionDetail
);

module.exports = router;
