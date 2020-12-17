import QiitaDTO from "../dto/QiitaDTO"
import QiitaDTOImpl from "../interfaces/QiitaDTOImpl"

import HTTPRequest from "../modules/HTTPRequest";
export default class QiitaService {
  getTitle(data: {title: string}): string {
    return data.title;
  }

  getUrl(data: {url: string}): string {
    return data.url;
  }

  createQiitaDTO(apiRes: QiitaDTOImpl) : QiitaDTO{
    return new QiitaDTO(this.getTitle(apiRes), this.getUrl(apiRes));
  }

  createQiitaDTOList(apiResArray: []): QiitaDTO[] {
    return apiResArray.map((apiRes: QiitaDTOImpl) => {
      return this.createQiitaDTO(apiRes);
    });
  }

  async getNewArticles(): Promise<{data: []}> {
    const httpRequest: HTTPRequest = new HTTPRequest();
    return await httpRequest.get(
      "https://qiita.com/api/v2/items?page=1&per_page=5"
    );
  }

  createMsgArrayByQiitaDTO(dtoList: QiitaDTOImpl[]): string[] {
    return dtoList.map(function (dto) {
      return `タイトル：${dto.title}\nURL: ${dto.url}`;
    });
  }
};
