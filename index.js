const IndexController = require("./controller/IndexController");
const HelloController = require("./controller/HelloController");
exports.handler = async (event) => {
  switch (event.rawPath) {
    case "/":
      return await IndexController.main();
      break;

    case "/hello":
      return HelloController.main();
      break;

    default:
      break;
  }
};
