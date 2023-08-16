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
      console.error("API Error:", err);
      return err;
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

  /* deletes an array of user ids */
  static async deleteUsers(userIds) {
    const promises = [];
    const results = { deleted: [], notDeleted: [] };
    for (const userId of userIds) {
      promises.push(this.request(`users/${userId}`, {}, "delete"));
    }
    for (let i = 0; i < promises.length; i++) {
      const res = await promises[i];
      if (res.status.toString()[0] === '2') {
        results.deleted.push(userIds[i]);
      }
      else {
        results.notDeleted.push(userIds[i]);
      }
    }
    return results;
  }

    /* deletes an array of user ids */
    static async activateUsers(arrOfUserObjs) {
      const promises = [];
      const results = { activated: [], notActivated: [] };
      for (const user of arrOfUserObjs) {
        promises.push(this.request(`users/${user.id}`, { ...user, state: "active" }, "put"));
      }
      for (let i = 0; i < promises.length; i++) {
        const res = await promises[i];
        if (res.status.toString()[0] === '2') {
          results.activated.push(arrOfUserObjs[i].id);
        }
        else {
          results.notActivated.push(arrOfUserObjs[i].id);
        }
      }
      return results;
    }

}

export default ApiLink;