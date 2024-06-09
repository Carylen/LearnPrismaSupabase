const express = require("express");
const dotenv = require("dotenv");
const userController = require("./users/userController")


dotenv.config();

const app = express();
const PORT = process.env.PORT;
// const prisma = connection;

app.use(express.json());

app.use('/users', userController)

app.listen(PORT, () => {
  console.log(`Express are listening on PORT:${PORT}`);
});
