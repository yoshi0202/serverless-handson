const axios = require("axios");
module.exports = class HTTPRequest {
  constructor(options = {}) {
    this.options = options;
  }

  async get(url) {
    return await axios.get(url);
  }

  async post(url, body = {}, options = {}) {
    return await axios.post(url, body, options);
  }
};
