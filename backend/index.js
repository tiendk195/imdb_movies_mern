import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};

app.get("/", (req, res) => {
  res.send("Database movies app !");
});

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
