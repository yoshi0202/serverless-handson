import ArticleController from "./ArticleController";
import DefaultController from "./DefaultController";

export default class IndexController {
  static async main(requestBody:string): (Promise<string | {}>) {
    try {
      const receiveMsg:string = JSON.parse(requestBody).events[0].message.text;
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
