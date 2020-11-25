const main = require("./main");
exports.handler = async (event) => {
  await main();
};
