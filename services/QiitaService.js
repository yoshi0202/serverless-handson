const QiitaDTO = require("../dto/QiitaDTO");
const HTTPRequest = require("../modules/HTTPRequest");
module.exports = class QiitaService {
  getTitle(data) {
    return data.title;
  }

  getUrl(data) {
    return data.url;
  }

  createQiitaDTO(apiRes) {
    return new QiitaDTO(this.getTitle(apiRes), this.getUrl(apiRes));
  }

  createQiitaDTOList(apiResArray) {
    return apiResArray.map((apiRes) => {
      return this.createQiitaDTO(apiRes);
    });
  }

  async getNewArticles() {
    const httpRequest = new HTTPRequest();
    return await httpRequest.get(
      "https://qiita.com/api/v2/items?page=1&per_page=5"
    );
  }

  createMsgArrayByQiitaDTO(dtoList) {
    return dtoList.map(function (dto) {
      return `タイトル：${dto.title}\n URL: ${dto.url}`;
    });
  }
};
