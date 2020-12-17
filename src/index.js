const IndexController = require("./controller/IndexController");
const HelloController = require("./controller/HelloController");
exports.handler = async (event) => {
  if (!process.env.LINE_TOKEN) {
    console.error(
      `LINE_TOKENが設定されていません LINE_TOKEN=${process.env.LINE_TOKEN}`
    );
    return "";
  }
  switch (event.rawPath) {
    case "/":
      return await IndexController.main(event.body);
      break;

    case "/hello":
      return await HelloController.main(event.body);
      break;

    default:
      break;
  }
};
