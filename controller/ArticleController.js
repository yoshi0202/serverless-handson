const QiitaService = require("../services/QiitaService");
const LineService = require("../services/LineService");

module.exports = class ArticleController {
  static async main(requestBody) {
    const lineService = new LineService();
    const qiitaService = new QiitaService();
    try {
      if (!process.env.LINE_TOKEN) {
        console.error(
          `LINE_TOKENが設定されていません LINE_TOKEN=${process.env.LINE_TOKEN}`
        );
        return "";
      }
      const reqBody = JSON.parse(requestBody);
      const qiitaRes = await qiitaService.getNewArticles();
      const articleList = qiitaService.createQiitaDTOList(qiitaRes.data);
      const messageArr = qiitaService.createMsgArrayByQiitaDTO(articleList);

      lineService.setToken(process.env.LINE_TOKEN);
      const sendMessageList = lineService.createMessageDTOList(messageArr);

      await lineService.postMessage(
        reqBody.events[0].source.userId,
        sendMessageList
      );
      return "OK";
    } catch (error) {
      console.error(`Err: ${error}`);
      return `Err: ${error}`;
    }
  }
};
