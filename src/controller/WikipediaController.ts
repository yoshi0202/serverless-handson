import LineService from "../services/LineService";
import WikipediaService from "../services/WikipediaService";
import LineRequestImpl from "../interfaces/LineRequestImpl"
import LineMsgDTOImpl from "../interfaces/LineMsgDTOImpl";
import StringUtil from "../utils/StringUtil";

export default class WikipediaController {
  static async main(requestBody: string): Promise<string | {}> {
    const lineService:LineService  = new LineService();
    const wikipediaService:WikipediaService = new WikipediaService();
    const stringUtil:StringUtil = new StringUtil();
    try {
      const reqBody: LineRequestImpl = JSON.parse(requestBody);
      const message: string = reqBody.events[0].message.text;
      let wikiSearched: string;
      console.log(reqBody.events[0].message.text);
      if (stringUtil.validFormat(message)) {
        const parsedText = stringUtil.parseSearchWord(reqBody.events[0].message.text);
        wikiSearched = await wikipediaService.searchByTitle(parsedText);
      } else {
        wikiSearched = "~~~\nとはの形式で入力してください！";
      }

      lineService.setToken(<string>process.env.LINE_TOKEN);
      const sendMessageList: LineMsgDTOImpl[] = lineService.createMessageDTOList([wikiSearched]);

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
