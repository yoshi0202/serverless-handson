const HTTPRequest = require("../modules/HTTPRequest");
module.exports = class HelloController {
  static async main(requestBody) {
    if (!process.env.LINE_TOKEN) {
      console.error(
        `LINE_TOKENが設定されていません LINE_TOKEN=${process.env.LINE_TOKEN}`
      );
      return "";
    }
    const request = new HTTPRequest();
    try {
      let body = JSON.parse(requestBody);
      await request.post(
        "https://api.line.me/v2/bot/message/push",
        {
          to: body.events[0].source.userId,
          messages: [{ type: "text", text: body.events[0].message.text }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.LINE_TOKEN}`,
          },
        }
      );
      return "OK";
    } catch (error) {
      console.error(`Err: ${error}`);
      return `Err: ${error}`;
    }
  }
};
