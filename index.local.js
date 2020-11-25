const main = require("./main");

(async function () {
  switch (process.argv[2]) {
    case "/":
      await main();
      break;

    case "/hello":
      console.log("hello!!!");
      break;

    default:
      console.log("404 Not found");
      break;
  }
})();
