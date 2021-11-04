import "dotenv/config";
import "./db";
import app from "./server";

const PORT = 4001;

const handleListening = () =>console.log("Server listening on port http://localhost:4001");

app.listen(PORT,handleListening);