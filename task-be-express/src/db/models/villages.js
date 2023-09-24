"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class villages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.villages.belongsTo(models.districts, {
        foreignKey: "district_id",
      });
    }
  }
  villages.init(
    {
      district_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "villages",
      underscored: true,
    }
  );
  return villages;
};
