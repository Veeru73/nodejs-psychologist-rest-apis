const sequelize = require("../utils/database");
const DataTypes = require("sequelize").DataTypes;
const model = sequelize.define(
  "auth",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER, // Here type 1
      allowNull: false,
      comment: "type==1 means patient || type==2 means therapist",
    },
  },
  { timestamps: true }
);

module.exports = model;
