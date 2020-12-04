const QiitaDTO = require("../dto/QiitaDTO");
const RequestModule = require("../modules/RequestModule");
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

  async getNewPost() {
    const request = new RequestModule(
      "qiita.com",
      "/api/v2/items?page=1&per_page=10",
      443,
      "GET"
    );
    return await request.send();
  }
};
