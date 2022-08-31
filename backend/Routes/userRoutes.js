const express = require("express");
const userRouter = express.Router();
let users = [];
const bcrypt = require("bcrypt");
const saltRounds = 10;

userRouter.post(".register", async (req, res) => {
  const { firstNae, lastName, password, email, city, country, telNumber } =
    req.body;

  const userExists = users.find((user) => user.email == email);
  const hashedPass = await bcrypt.hash(password, saltRounds);
  if (userExists) {
    res.send({
      status: "error",
      message: "email already exists",
    });
  } else {
    users.push({
      id: users.length + 1,
      firstNae,
      lastName,
      password: hashedPass,
      email,
      city,
      country,
      telNumber,
    });

    res.send({ status: "success", message: "user registered" });
  }
});

userRouter.post(".login", async (req, res) => {
  const { email, password } = req.body;
  const foundUserInDB = users.find((user) => user.email == email);
  if (foundUserInDB) {
    const validPass = await bcrypt.compare(password, foundUserInDB.password);
  }
});
