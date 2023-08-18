const User = require("./User");
const Resume = require("./Resume");

User.hasOne(Resume, {
  foreignKey: "user_id",
});

module.exports = { User, Resume };
