import QiitaDTOImpl from "../interfaces/QiitaDTOImpl"

export default class QiitaDTO implements QiitaDTOImpl{
  title: string
  url: string

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
};
