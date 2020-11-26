const RequestModule = require("../RequestModule");
module.exports = class LineService {
  constructor() {
    this.token = "";
  }
  async postMessage(msg) {
    const postData = JSON.stringify(msg);
    const request = new RequestModule(
      "api.line.me",
      "/v2/bot/message/push",
      443,
      "POST",
      {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
        Authorization: `Bearer ${this.token}`,
      }
    );
    await request.send();
  }
};
