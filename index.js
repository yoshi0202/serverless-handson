const IndexController = require("./controller/IndexController");
const HelloController = require("./controller/HelloController");
exports.handler = async (event) => {
  switch (event.rawPath) {
    case "/":
      return await IndexController.main();

    case "/hello":
      return HelloController.main();

    default:
      break;
  }
};
