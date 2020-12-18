import axios from "axios";
import ApiRequestBodyImpl from "../interfaces/ApiRequestBodyImpl";
import ApiRequestHeaderImpl from "../interfaces/ApiRequestHeaderImpl";
import HTTPRequestImpl from "../interfaces/HTTPRequestImpl"

export default class HTTPRequest {

  async get(url: string): Promise<HTTPRequestImpl> {
    return await axios.get(url);
  }

  async post(url: string, body: ApiRequestBodyImpl , options: ApiRequestHeaderImpl): Promise<HTTPRequestImpl> {
    return await axios.post(url, body, options);
  }
};
