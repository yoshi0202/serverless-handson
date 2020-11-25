module.exports = class QiitaService {
  static getTitles(apiRes) {
    return apiRes.map((data) => {
      return data.title;
    });
  }

  static getUrls(apiRes) {
    return apiRes.map((data) => {
      return data.url;
    });
  }
};
