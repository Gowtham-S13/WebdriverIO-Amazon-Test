const axios = require("axios");

class ApiHelper {
  static async getRequest(url, headers = {}) {
    const response = await axios.get(url, { headers });
    return response.data;
  }

  static async postRequest(url, data, headers = {}) {
    const response = await axios.post(url, data, { headers });
    return response.data;
  }

  static async deleteRequest(url, headers = {}) {
    const response = await axios.delete(url, { headers });
    return response.data;
  }
}

export default new ApiHelper();
