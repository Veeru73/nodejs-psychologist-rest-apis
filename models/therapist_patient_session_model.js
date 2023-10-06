const sequelize = require("../utils/database");
const AuthModel = require("./auth_model");
const DataTypes = require("sequelize").DataTypes;
const model = sequelize.define(
  "therapist_patient_session",
  {
    therapist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    session_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    session_start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    session_end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: true }
);

//therapist association
AuthModel.hasMany(model, {
  foreignKey: "therapist_id",
  as: "therapist",
});
model.belongsTo(AuthModel, {
  foreignKey: "therapist_id",
  as: "therapist",
});

//patient association
AuthModel.hasMany(model, {
  foreignKey: "patient_id",
  as: "patient",
});
model.belongsTo(AuthModel, {
  foreignKey: "patient_id",
  as: "patient",
});

module.exports = model;
