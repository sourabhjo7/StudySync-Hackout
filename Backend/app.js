require("dotenv").config(); //for using environment variables
require("./config/database").connect(); //setting up the database connection
const { OpenAI } = require("langchain/llms/openai");

const llm = new OpenAI({
  temperature: 0.9,
  openAIApiKey: process.env.OpenAIKEY,
});
const express = require("express"); //for creating server
const cookieParser = require("cookie-parser"); //for storing cookies
const cors = require("cors"); //for enabling api requuest from external source

// Routers
// 1) dashboard: Contain all the endpoints for main API funcnality
// 2) auth: Contain all the endpoints for maintainig autorization and authentication
const dashboardRouter = require("./route/dashboard");
const authRouter = require("./route/auth");
const { valToken } = require("./middleware/auth");

//creating an express server
const app = express();

//middleware for using json from expressJS
app.use(express.json());

//middleware using cors with options
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5000"], //change origin based on domain main of the application
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

//middleware for using cookieParser
app.use(cookieParser());

//Defining headers for cors
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Using Routes
app.use("/", dashboardRouter);
app.use("/auth", authRouter);

app.post("/ask-ai", valToken, async (req, res) => {
  try {
    const { query } = req.body;
    const llmResult = await llm.call(text);
    console.log(llmResult);
    return res.status(200).json({
      message: llmResult,
    });
  } catch (e) {
    return res.json({
      sucess: false,
      error: e,
    });
  }
});

module.exports = app;
