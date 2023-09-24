"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class districts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.districts.belongsTo(models.regencies, {
        foreignKey: "regency_id",
      });
    }
  }
  districts.init(
    {
      regency_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "districts",
      underscored: true,
    }
  );
  return districts;
};
