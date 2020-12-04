const HTTPRequest = require("../modules/HTTPRequest");
const LineService = require("../services/LineService");
module.exports = class HelloController {
  static async main(requestBody) {
    const request = new HTTPRequest();
    const lineService = new LineService();
    try {
      if (!process.env.LINE_TOKEN) {
        console.error(
          `LINE_TOKENが設定されていません LINE_TOKEN=${process.env.LINE_TOKEN}`
        );
        return "";
      }

      let body = JSON.parse(requestBody);
      lineService.setToken(process.env.LINE_TOKEN);
      const sendMessageList = lineService.createMessageDTOList([
        body.events[0].message.text,
      ]);
      await lineService.postMessage(
        body.events[0].source.userId,
        sendMessageList
      );

      return "OK";
    } catch (error) {
      console.error(`Err: ${error}`);
      return `Err: ${error}`;
    }
  }
};
