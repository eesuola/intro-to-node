import connectDB from "./db/connect.js";
import express from "express";
import { configDotenv } from "dotenv";
import registrationRoutes from "./routes/authentication.js";

configDotenv();

const PORT = 4000;
const connectionString= process.env.MONGO_URI
const app = express();
app.use(express.json());

app.use("/auth", registrationRoutes);

const HOST = "localhost";



app.get("/", (req, res) => {
  res.send("Hello World!");
});






app.listen(PORT, HOST, async () => {
    await connectDB(connectionString)
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
