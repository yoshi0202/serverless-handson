export default class StringUtil {
  constructor() {

  }

  parseSearchWord(sentence: string): string {
    const regex: RegExp = /\nとは.*$/;
    return sentence.replace(regex, "");
  }

  validFormat(sentence: string): boolean {
    const regex: RegExp = /\nとは.*$/;
    return sentence.match(regex) !== null;
  }
}