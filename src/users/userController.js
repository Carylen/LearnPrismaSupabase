const express = require("express");
const prisma = require("../db/index");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

// router.post("/", async (req, res) => {
//   const newUser = req.body;

//   const insertUser = await prisma.user.create({
//     data: {
//       name: newUser.name,
//       age: newUser.age,
//       phoneNumber: newUser.phoneNumber,
//     },
//   });

//   res.send(insertUser);

//   // if (insertUser) {
//   //     res.status(200).send(`Succes Insert Data : ${insertUser}`)
//   // }
// });

module.exports = router;
