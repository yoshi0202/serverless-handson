const RequestModule = require("../RequestModule");
const QiitaService = require("../QiitaService");
module.exports = class IndexController {
  static async main() {
    const request = new RequestModule(
      "qiita.com",
      "/api/v2/items?page=1&per_page=10",
      443,
      "GET"
    );
    const qiitaService = new QiitaService();
    try {
      const apiRes = await request.get();
      let dto = qiitaService.createQiitaDTOList(apiRes);
      return dto;
    } catch (error) {
      return error;
    }
  }
};
