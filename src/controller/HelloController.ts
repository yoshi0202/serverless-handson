import LineService from "../services/LineService";
import LineRequestImpl from "../interfaces/LineRequestImpl"
import LineMsgDTOImpl from "../interfaces/LineMsgDTOImpl";

export default class HelloController {
  static async main(requestBody:string) : Promise<string | {}>{
    const lineService = new LineService();
    try {
      const body:LineRequestImpl = JSON.parse(requestBody);
      lineService.setToken(<string>process.env.LINE_TOKEN);
      const sendMessageList: LineMsgDTOImpl[] = lineService.createMessageDTOList([
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
