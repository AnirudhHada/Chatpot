import app from "./server";
const http = require("http");
// const serverless = require("serverless-http");
const PORT = process.env.PORT || 8000;

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

// module.exports.handler = serverless(app);
http.createServer(app).listen(PORT, handleListening);
