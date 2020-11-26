const QiitaService = require("../services/QiitaService");
const LineService = require("../services/LineService");
module.exports = class IndexController {
  static async main() {
    const qiitaService = new QiitaService();
    const lineService = new LineService();
    try {
      const res = await qiitaService.getNewPost();
      return qiitaService.createQiitaDTOList(res);
      // const qiitaDto = qiitaService.createQiitaDtoList(res);
      // get token
      // const token = await lineService.getAccessToken();
      // lineService.setToken(token);
      // await lineService.revokeAccessToken();
      // return lineService.token;
    } catch (error) {
      return error;
    }
  }
};
