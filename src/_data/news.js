require("dotenv").config();
const axios = require("axios");

module.exports = async function() {
  try {
    const resp = await axios.get("https://newsapi.org/v2/top-headlines?pageSize=5&category=sports&country=us&apiKey=" + process.env.NEWS_API_KEY);
    return resp.data;
  } catch (err) {
    console.error(err);
  }
};
