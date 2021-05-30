const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Post = require("./posts");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "comments",
    timestamps: true,
    freezeTableName: false,
  }
);

module.exports = Comment;
