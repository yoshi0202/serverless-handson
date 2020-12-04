const QiitaService = require("../services/QiitaService");
module.exports = class IndexController {
  static async main() {
    const qiitaService = new QiitaService();
    try {
      const res = await qiitaService.getNewArticles();
      return qiitaService.createQiitaDTOList(res.data);
    } catch (error) {
      return error;
    }
  }
};
