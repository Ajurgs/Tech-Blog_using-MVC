const User = require("./users");
const Post = require("./posts");
const Comment = require("./comments");

// Post.belongsTo(User, {});
// Comment.belongsTo(User, {});
// Comment.belongsTo(Post, {});
User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});
module.exports = {
  User,
  Post,
  Comment,
};
