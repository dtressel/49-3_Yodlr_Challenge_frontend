import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class ApiLink {
  /* Generic api communication method through which all specific methods below will run */
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { "Content-Type": "application/json" }
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers }));
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /* Get All Users */
  static async getAllUsers() {
    const data = await this.request(`users`);
    return data;
  }

  /* Register user */
  static async signupUser(signupInfo) {
    const data = await this.request(`users`, signupInfo, "post");
    return data;
  }

  /* Get details on a user by user id */
  static async getUser(userId) {
    const data = await this.request(`users/${userId}`);
    return data;
  }

  /* Update information for a particular user */
  static async updateUser(userId, updateInfo) {
    const data = await this.request(`users/${userId}`, updateInfo, "put");
    return data;
  }

  /* Update information for a particular user */
  static async deleteUser(userId) {
    const data = await this.request(`users/${userId}`, {}, "delete");
    return data;
  }

}

export default ApiLink;