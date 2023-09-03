const mongoose = require("mongoose");

console.log(process.env.MONGO_URI);

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "socialMedia" })
    .then((con) => console.log(`Database Connected:${con.connection.host}`))
    .catch((err) => console.log(err));
};
