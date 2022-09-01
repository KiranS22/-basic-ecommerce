const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const PORT = 4000;
let users = [];
console.log(users);
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const session = require("express-session");
const store = new session.MemoryStore();
app.use(
  session({
    secret: "appdemmo",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.post("/register", async (req, res) => {
  console.log(`Users in register route ${users}`);

  const { firstName, lastName, password, email, city, country, tel } = req.body;

  const userExists = users.find((user) => user.email == email);
  try {
    const hashedPass = await bcrypt.hash(password, saltRounds);
    if (userExists) {
      res.send({
        status: "error",
        message: "email already exists",
      });
    } else {
      users.push({
        id: users.length + 1,
        firstName,
        lastName,
        password: hashedPass,
        email,
        city,
        country,
        tel,
      });

      res.send({ status: "success", message: "user registered" });
      res.redirect("/login");
    }
  } catch (err) {
    if (err) {
      res.status(500).send();
    }
  }
  console.log(users);
});

app.post("/login", async (req, res) => {
  console.log(`Users in login route ${users}`);
  const { email, password } = req.body;
  const foundUserInDB = users.find((user) => user.email == email);
  if (foundUserInDB) {
    const validPass = await bcrypt.compare(password, foundUserInDB.password);
    if (validPass) {
      req.session.authenticated = true;
      req.session.users = {
        email,
        password,
      };
      return res.redirect("/");
    }
  }
  res.status(500).send("Bad Request");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
