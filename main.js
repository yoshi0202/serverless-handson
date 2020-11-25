const requestModule = require("./RequestModule");
const qiitaService = require("./QiitaService");
module.exports = async function () {
  const request = new requestModule(
    "qiita.com",
    "/api/v2/items?page=1&per_page=10",
    443,
    "GET"
  );
  const qService = new qiitaService();
  try {
    const apiRes = await request.get();
    let dto = qService.createQiitaDTOList(apiRes);
    console.log(dto);
  } catch (error) {
    console.log(error);
  }
};
