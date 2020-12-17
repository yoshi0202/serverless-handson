import axios from "axios";

export default class HTTPRequest {
  options: {}
  constructor(options: {} = {}) {
    this.options = options;
  }

  async get(url: string): Promise<{data: []}> {
    return await axios.get(url);
  }

  async post(url: string, body: {} = {}, options: {} = {}): Promise<{data: []}> {
    return await axios.post(url, body, options);
  }
};
