const IndexController = require("./controller/IndexController");
exports.handler = async (event) => {
  switch (event.rawPath) {
    case "/":
      return await IndexController.main();

    case "/hello":
      console.log("hello!!!");
      break;

    default:
      break;
  }
};
