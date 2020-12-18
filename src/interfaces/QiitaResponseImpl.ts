import HTTPRequestImpl from "./HTTPRequestImpl";

export default interface QiitaResponseImpl extends HTTPRequestImpl{
  data: [{
    title: string,
    url: string,
  }]
}