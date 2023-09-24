"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class regencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.regencies.belongsTo(models.provinces, {
        foreignKey: "province_id",
      });
    }
  }
  regencies.init(
    {
      province_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "regencies",
      underscored: true,
    }
  );
  return regencies;
};
