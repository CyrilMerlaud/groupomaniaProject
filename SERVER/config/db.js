const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Cyril:" + process.env.DB_PASS + "@cluster0.d67yhc2.mongodb.net/test",
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
