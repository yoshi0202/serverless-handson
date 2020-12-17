import HTTPRequest from "../modules/HTTPRequest";
import LineMsgDTO from "../dto/LineMsgDTO";
import LineMsgDTOImpl from "../interfaces/LineMsgDTOImpl";

export default class LineService {
  token: string

  constructor() {
    this.token = "";
  }

  /**
   *
   * @param {String} LINEのチャネルトークン
   */
  setToken(token: string): void {
    this.token = token;
  }

  /**
   *
   * @param {String} 宛先(ユーザID)
   * @param {Array} LineMsgDTOの配列
   */
  async postMessage(to: string, msg: LineMsgDTO[]): Promise<void> {
    const httpRequest = new HTTPRequest();
    await httpRequest.post(
      "https://api.line.me/v2/bot/message/push",
      {
        to: to,
        messages: msg,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
  }

  /**
   *
   * @param {Array} 送信するメッセージの配列
   */
  createMessageDTOList(textArr:string[] = []): LineMsgDTOImpl[]{
    const dtoArr = [];
    for (let text of textArr) {
      const lineMsgDTO = new LineMsgDTO(
        "text",
        text
      );
      dtoArr.push(lineMsgDTO);
    }
    return dtoArr;
  }
};
