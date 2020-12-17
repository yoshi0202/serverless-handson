const LineService = require("../services/LineService");
module.exports = class DefaultController {
  static async main(requestBody) {
    const lineService = new LineService();
    try {
      const body = JSON.parse(requestBody);
      lineService.setToken(process.env.LINE_TOKEN);
      const sendMessageList = lineService.createMessageDTOList([
        "メッセージ内に[Qiita], [qiita], [キータ]を含んで送信してください",
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
