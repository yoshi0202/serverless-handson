import LineMsgDTOImpl from "../interfaces/LineMsgDTOImpl"

export default class LineMsgDTO implements LineMsgDTOImpl{
  type: string
  text: string

  constructor(type: string, text: string) {
    this.type = type;
    this.text = text;
  }
};
