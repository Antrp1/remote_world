require("dotenv").config();
const Sequelize = require("sequelize");
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  if (process?.env?.DB_NAME !== "techgurus_db") {
    console.log("The .env file database option isn't set to techgurus_db.")
    process.exit();
  }
  
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}


module.exports = sequelize;
