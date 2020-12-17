const ArticleController = require("./ArticleController");
const DefaultController = require("./DefaultController");
module.exports = class IndexController {
  static async main(requestBody) {
    try {
      const receiveMsg = JSON.parse(requestBody).events[0].message.text;
      switch (true) {
        case /^.*(Qiita|qiita|キータ)/.test(receiveMsg):
          return await ArticleController.main(requestBody);

        default:
          return await DefaultController.main(requestBody);
      }
    } catch (error) {
      return {
        statusCode: "200",
        body: error,
      };
    }
  }
};
