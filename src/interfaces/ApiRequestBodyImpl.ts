import LineMsgDTOImpl from "./LineMsgDTOImpl";

export default interface ApiRequestBodyImpl {
  to: string,
  messages: LineMsgDTOImpl[]
}