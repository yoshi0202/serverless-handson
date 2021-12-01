import HTTPRequestImpl from "../interfaces/HTTPRequestImpl";
import WikipediaResponseImpl from "../interfaces/WikipediaResponseImpl";
import WikipediaService from "../services/WikipediaService";

describe('wikipediaService', (): void => {
  test('searchByTitle タイトル検索ができること', async (): Promise<void> => {
    const wikipediaService: WikipediaService = new WikipediaService();
    const sut1: string = await wikipediaService.searchByTitle("あいうえお");
    // extractのあるページなのでキーが存在し中身が空ではない
    expect(typeof(sut1)).toBe("string");
    const sut2: string = await wikipediaService.searchByTitle("l;jfkdsajouirewa");
    // // extractの存在しないページは空文字が返却
    expect(typeof(sut2)).toBe("string");
    expect(sut2).toBe(wikipediaService.NOT_FOUND);
    const sut3: string = await wikipediaService.searchByTitle(" ");
    // extractの存在しないページは空文字が返却
    expect(typeof(sut3)).toBe("string");
    expect(sut3).toBe(wikipediaService.NOT_FOUND);
    const sut4: string = await wikipediaService.searchByTitle("　");
    // extractの存在しないページは空文字が返却
    expect(typeof(sut4)).toBe("string");
    expect(sut4).toBe(wikipediaService.NOT_FOUND);
    const sut5: string = await wikipediaService.searchByTitle("deltarune");
    // extractの存在しないページは空文字が返却
    expect(typeof(sut5)).toBe("string");
    expect(sut5).toBe(wikipediaService.NOT_FOUND);
  });
})