const http = require("https");
module.exports = class RequestModule {
  constructor(host, path, port, method, headers = {}) {
    this.host = host;
    this.path = path;
    this.port = port;
    this.method = method;
    this.headers = headers;
    this.response = "";
  }

  async send(data = "") {
    return new Promise((resolve, reject) => {
      const options = {
        host: this.host,
        path: this.path,
        port: this.port,
        method: this.method,
        headers: this.headers,
      };

      const req = http.request(options, (res) => {
        res.on("data", (chunk) => {
          this.response += chunk;
        });
        res.on("end", () => {
          let resJson;
          try {
            resJson = JSON.parse(this.response);
          } catch (error) {
            reject(error.message);
          }
          resolve(resJson);
        });
      });

      req.on("error", (e) => {
        reject(e.message);
      });

      // send the request
      req.write(data);
      req.end();
    });
  }
};
