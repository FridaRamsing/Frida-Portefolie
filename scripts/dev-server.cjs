const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};

const server = http.createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" });
    return response.end();
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const parts = pathname.split(/[\\/]/);
    if (parts.some((part) => part.startsWith(".") || part === "node_modules")) {
      response.writeHead(403);
      return response.end("Forbidden");
    }
    let filename = path.resolve(root, "." + pathname);
    if ((await fs.stat(filename)).isDirectory()) filename = path.join(filename, "index.html");
    filename = await fs.realpath(filename);
    if (!filename.startsWith(root + path.sep)) {
      response.writeHead(403);
      return response.end("Forbidden");
    }
    const data = await fs.readFile(filename);
    response.writeHead(200, {
      "Content-Type": types[path.extname(filename).toLowerCase()] || "application/octet-stream",
      "Content-Length": data.length,
      "Cache-Control": "no-store",
    });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch (error) {
    response.writeHead(error instanceof URIError ? 400 : 404);
    response.end(error instanceof URIError ? "Bad request" : "Not found");
  }
});

let port = 3000;
server.on("error", (error) => {
  if (error.code === "EADDRINUSE" && port < 3010) {
    port += 1;
    server.listen(port, "127.0.0.1");
  } else {
    console.error("Could not start local server:", error.message);
    process.exitCode = 1;
  }
});
server.on("listening", () => {
  console.log(`Portfolio: http://127.0.0.1:${port}`);
  console.log("Stop with Ctrl+C.");
});
server.listen(port, "127.0.0.1");
