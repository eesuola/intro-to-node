import connectDB from "./db/connect.js";
import express from "express";
import { configDotenv } from "dotenv";
import registrationRoutes from "./routes/authentication.js";
import cors from "cors";
import { logToTerminal } from "./middleware/logger.js";
import adminRoutes from "./routes/admin.js";
import { checkToken } from "./middleware/checkToken.js";

configDotenv();

const connectionString= process.env.MONGO_URI
const PORT = 4000;
const app = express();
app.use(express.json());
// app.use(logToTerminal());
app.use(cors());

app.use("/auth", logToTerminal, registrationRoutes);
app.use("/admin", checkToken, adminRoutes);

const HOST = "localhost";



app.get("/", (req, res) => {
  res.send("Hello World!");
});






app.listen(PORT, HOST, async () => {
    await connectDB(connectionString)
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
