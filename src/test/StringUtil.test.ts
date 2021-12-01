import StringUtil from "../utils/StringUtil";


describe('StringUtil', (): void => {
  test('parseSearchWord xxxx¥nとは からxxxxだけが抽出できること', (): void => {
    const stringUtil: StringUtil = new StringUtil();
    const sut: string = "あいうえお\nとは"
    expect(stringUtil.parseSearchWord(sut)).toBe("あいうえお");
  })

  test('validFormat xxxx¥nとは の形式になっていることをチェック', (): void => {
    const stringUtil: StringUtil = new StringUtil();
    const sut1: string = "あいうえお\nとは"
    expect(stringUtil.validFormat(sut1)).toBeTruthy();
    const sut2: string = "あいうえお"
    expect(stringUtil.validFormat(sut2)).toBeFalsy();
    const sut3: string = "あいうえお\n\nとは"
    expect(stringUtil.validFormat(sut3)).toBeTruthy();
    const sut4: string = "あいうえお \nとは"
    expect(stringUtil.validFormat(sut4)).toBeTruthy();
    const sut5: string = "あいうえお\n とは"
    expect(stringUtil.validFormat(sut5)).toBeFalsy();
    const sut6: string = "あいうえお\nと は"
    expect(stringUtil.validFormat(sut6)).toBeFalsy();
    const sut7: string = "あいうえお\nとは "
    expect(stringUtil.validFormat(sut7)).toBeTruthy();
    const sut8: string = "あいうえお\nとは\nとは"
    expect(stringUtil.validFormat(sut8)).toBeTruthy();
  })
})
