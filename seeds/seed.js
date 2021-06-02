const { User } = require("../models");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------- Database Populating -------------");
  await seedUsers();
  process.exit();
};

seedAll();

const userData = [
  {
    username: "admin",
    password: "adminPass",
  },
];

const seedUsers = () => User.bulkCreate(userData);
