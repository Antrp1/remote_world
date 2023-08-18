const User = require("./User");
const Messages = require("./Messages");

User.hasMany(Messages, {
  foreignKey: "user_id",
});

module.exports = { User, Messages };
