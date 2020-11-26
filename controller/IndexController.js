const RequestModule = require("../RequestModule");
const QiitaService = require("../services/QiitaService");
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
      return qiitaService.createQiitaDTOList(apiRes);
    } catch (error) {
      return error;
    }
  }
};
