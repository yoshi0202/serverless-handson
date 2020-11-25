const IndexController = require("./controller/IndexController");
const HelloController = require("./controller/HelloController");

(async function () {
  switch (process.argv[2]) {
    case "/":
      console.log(await IndexController.main());

    case "/hello":
      console.log(HelloController.main());
      break;

    default:
      console.log("404 Not found");
      break;
  }
})();
