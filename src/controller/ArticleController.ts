import QiitaService from "../services/QiitaService";
import LineService from "../services/LineService";
import LineRequestImpl from "../interfaces/LineRequestImpl"
import QiitaDTOImpl from "../interfaces/QiitaDTOImpl";
import LineMsgDTOImpl from "../interfaces/LineMsgDTOImpl";
import QiitaResponseImpl from "../interfaces/QiitaResponseImpl";

export default class ArticleController {
  static async main(requestBody: string): Promise<string | {}> {
    const lineService:LineService  = new LineService();
    const qiitaService:QiitaService = new QiitaService();
    try {
      const reqBody: LineRequestImpl = JSON.parse(requestBody);
      const qiitaRes: QiitaResponseImpl = await qiitaService.getNewArticles();
      const articleList: QiitaDTOImpl[] = qiitaService.createQiitaDTOList(qiitaRes);
      const messageArr: string[] = qiitaService.createMsgArrayByQiitaDTO(articleList);

      lineService.setToken(<string>process.env.LINE_TOKEN);
      const sendMessageList: LineMsgDTOImpl[] = lineService.createMessageDTOList(messageArr);

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
