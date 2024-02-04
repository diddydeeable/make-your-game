import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import http from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const handleRequest = async (req, res) => {
  if (req.url && req.url.startsWith("/favicon")) {
    console.log("Handling favicon request");

    try {
      // Extract the requested size from the URL
      const requestedSizeMatch = req.url.match(/\/favicon-(\d+)x(\d+)\.png/);
      const size = requestedSizeMatch
        ? { width: requestedSizeMatch[1], height: requestedSizeMatch[2] }
        : null;

      // Identify the appropriate favicon file based on the requested size
      const faviconFilename = size
        ? `favicon-${size.width}x${size.height}.png`
        : "favicon.ico";

      // Read and serve the favicon file
      const faviconPath = path.join(__dirname, "..", "image", faviconFilename);
      const faviconStream = fs.createReadStream(faviconPath);

      res.writeHead(200, { "Content-Type": "image/png" }); // Assuming favicon files are in PNG format
      faviconStream.pipe(res);
    } catch (err) {
      console.error("Error handling favicon:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }

    return;
  }

  if (req.url === "/") {
    try {
      // Read and serve the index.html file
      const indexPath = path.join(__dirname, "..", "index.html");
      const data = await fsp.readFile(indexPath, "utf8");

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  } else {
    // Handle other routes or game logic
    console.log(req.url, req.method);
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
};

const server = http.createServer(handleRequest);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default handleRequest;
