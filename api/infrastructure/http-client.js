/**
 * AXIOS CLIENT WRAPPER
 * Want to change http client? No problem, change it here.
 * 
 * Improvements: add typescript & interfaces
 */
import axios from "axios";

export default class HttpClient {
  static get(url, options = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, options)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
  static post(url, payload, options = {}) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, payload, options)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
  static put() {
    return new Promise((resolve, reject) => {
      axios
        .put(url, payload, options)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
  static patch() {
    return new Promise((resolve, reject) => {
      axios
        .patch(url, payload, options)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
  static delete() {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, options)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
}
