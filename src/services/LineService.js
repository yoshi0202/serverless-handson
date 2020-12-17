const HTTPRequest = require("../modules/HTTPRequest");
const LineMsgDTO = require("../dto/LineMsgDTO");
module.exports = class LineService {
  constructor() {
    this.token = "";
  }

  /**
   *
   * @param {String} LINEのチャネルトークン
   */
  setToken(token) {
    this.token = token;
  }

  /**
   *
   * @param {String} 宛先(ユーザID)
   * @param {Array} LineMsgDTOの配列
   */
  async postMessage(to, msg) {
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
  createMessageDTOList(textArr = []) {
    const dtoArr = [];
    for (let text of textArr) {
      const lineMsgDTO = new LineMsgDTO();
      lineMsgDTO.type = "text";
      lineMsgDTO.text = text;
      dtoArr.push(lineMsgDTO);
    }
    return dtoArr;
  }
};
