const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const app = express();

const text = require("./src/routes/texts");
const authen = require("./src/routes/auth");

dotenv.config();
mongoose
  .connect(process.env.CONNECT_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECT TO MONGODB");
  })
  .catch((err) => console.log(err));
const port = 4000;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", text);
app.use("/api", authen);
app.use('/uploads', express.static(path.join(__dirname, 'src/uploads'))); // Thêm dòng này


//Khởi chạy
app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});
