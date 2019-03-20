const baseUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;
const apiLanguage = process.env.LANGUAGE;

const generateQueryParams = data => {
  const ret = Object.keys(data).map((key, value) => `${key}=${value}`);
  return ret.join("&");
};

const generateQueryUrl = (url, args = {}) => {
  const queryData = Object.assign({ api_key: apiKey, language: apiLanguage }, args);
  const serverUrl = `${baseUrl}${url}?${generateQueryParams(queryData)}`;
  return serverUrl;
};

export default generateQueryUrl;
