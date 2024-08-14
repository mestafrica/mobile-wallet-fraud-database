import express from "express";
import { dbConnection } from "./config/db.js";
import { userRouter } from "./routes/user_route.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import { passwordRouter } from "./routes/resetPassword_route.js";
import { fraudReportRouter } from "./routes/fraudReport_route.js";

const app = express();

dbConnection();

// Use middlewares
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
    }),
  })
);

// Use routes
app.use(userRouter);
app.use(passwordRouter);
app.use(fraudReportRouter);

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
