// server.js
import http from "http";
import handleRequest from "./handleRequest.mjs";

const server = http.createServer(handleRequest);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(
    `🏁 Hello peeps, server is running locally\n👉 http://localhost:${PORT}\nType ^+C to shut down ❌`
  );
});
