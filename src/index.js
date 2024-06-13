const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send(`
    <h1 className="">welcome To Smart-brain-api</h1>
    <p>This is a backend Api</p>`
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port... ${PORT}`);
});
