"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  History.init(
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Question can't be empty",
          },
          notNull: {
            msg: "Question can't be empty",
          },
        },
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Answer can't be empty",
          },
          notNull: {
            msg: "Answer can't be empty",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "UserId can't be empty",
          },
          notNull: {
            msg: "UserId can't be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
