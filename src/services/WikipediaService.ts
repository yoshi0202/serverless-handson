import HTTPRequest from "../modules/HTTPRequest";
import HTTPRequestImpl from "../interfaces/HTTPRequestImpl";
import WikipediaResponseImpl from "../interfaces/WikipediaResponseImpl";

export default class WikipediaService {

  public NOT_FOUND;
  constructor() {
    this.NOT_FOUND = "検索しましたが見つかりませんでした・・・"
  }

  /**
   *
   * @param {string} title APIの検索パラメータ wikipediaのページタイトル
   */
  async searchByTitle(title: string): Promise<string> {
    const url = encodeURI("https://ja.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&titles=" + title);
    const httpRequest: HTTPRequest = new HTTPRequest();
    const result = <WikipediaResponseImpl>await httpRequest.get(url)
    return this.parseResponse(result);
  }

  hoge(): boolean {
    return true;
  }

  parseResponse(object: WikipediaResponseImpl): string{
    let result: string | undefined;
    for (const pageId in object.data.query.pages) {
      result = object.data.query.pages[pageId].extract;
    }
    if (result === undefined) {
      return this.NOT_FOUND;
    }
    if (result === "") {
      return this.NOT_FOUND;
    }
    return result;
  }
};
