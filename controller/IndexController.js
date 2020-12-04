const QiitaService = require("../services/QiitaService");
const LineService = require("../services/LineService");
module.exports = class IndexController {
  static async main() {
    const qiitaService = new QiitaService();
    const lineService = new LineService();
    try {
      const res = await qiitaService.getNewPost();
      return qiitaService.createQiitaDTOList(res);
    } catch (error) {
      return error;
    }
  }
};
