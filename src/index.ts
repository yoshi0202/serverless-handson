import IndexController from "./controller/IndexController"
import HelloController from "./controller/HelloController"
import RequestBodyImpl from "./interfaces/RequestBodyImpl"

exports.handler = async (event: RequestBodyImpl) : Promise<string| {} > => {
  if (!process.env.LINE_TOKEN) {
    console.error(
      `LINE_TOKENが設定されていません LINE_TOKEN=${process.env.LINE_TOKEN}`
    );
    return "";
  }
  switch (event.rawPath) {
    case "/":
      return await IndexController.main(event.body);

    case "/hello":
      return await HelloController.main(event.body);

    default:
      return "";
  }
}
