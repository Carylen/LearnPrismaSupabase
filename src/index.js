const express = require("express");
const dotenv = require("dotenv");
const userController = require("./users/userController");
// const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
// const SUPABASE_URL = process.env.SUPABASE_URL
// const SUPABASE_KEY = process.env.SUPABASE_KEY

// const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
// const prisma = connection;
app.use(cors());
app.use(express.json());

app.use("/users", userController);

app.listen(PORT, () => {
  console.log(`Express are listening on PORT:${PORT}`);
});
