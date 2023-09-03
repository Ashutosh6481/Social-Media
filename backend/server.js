const app = require("./app");

const connDb = require("./config/database").connectDatabase;

connDb();

//yeh kya hai
// tum databse ka function banae lekin usko run bhi to karoge na

// aur tum ye jo kar rhe ho ye commonjs hai modulejs nahi matlab isme require hogai import k jagah aur export ka bhi tareeka alag hoga smjhe? waha p tum export default kar rhe the isme module.exports= name aise hota hai

app.listen(process.env.Port, () => {
  console.log(`Server is running on port ${process.env.Port}`);
});
