const requestModule = require("./RequestModule");
const qiitaService = require("./QiitaService");
module.exports = async function () {
  const request = new requestModule(
    "qiita.com",
    "/api/v2/items?page=1&per_page=10",
    443,
    "GET"
  );
  try {
    const apiRes = await request.get();
    console.log(apiRes[0]);
    let title = qiitaService.getTitles(apiRes);
    let url = qiitaService.getUrls(apiRes);
    console.log(title);
    console.log(url);
  } catch (error) {
    console.log(error);
  }
};
