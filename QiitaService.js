const QiitaDTO = require("./QiitaDTO");
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
};
