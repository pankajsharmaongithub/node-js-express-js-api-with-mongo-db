const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;

// console.log(process.env.MONGO_URI);

const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});