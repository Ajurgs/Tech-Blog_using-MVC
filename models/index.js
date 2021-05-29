const User = require("./users");
const Post = require("./posts");
const Comment = require("./comments");

Post.belongsTo(User, {});
Comment.belongsTo(User, {});
Comment.belongsTo(Post, {});
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});
module.exports = {
  User,
  Post,
  Comment,
};
