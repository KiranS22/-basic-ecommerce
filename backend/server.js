const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const PORT = 4000

app.listen(PORT, ()=>{
  console.log(`App is running on port ${PORT}`);

})