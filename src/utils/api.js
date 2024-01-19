import axios from "axios";

export const api = {
  data_source_url:
    "https://run.mocky.io/v3/ebac0b77-a220-46d3-963c-ae8881c7e4c3",

  get: (url) => {
    return new Promise((resolve, reject) => {
      const info = {
        method: "get",
        url: url,
      };
      axios(info)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log(info);
          console.log("error in get ", error);
          reject(error);
        });
    });
  },
  post: (payload, url) => {
    return new Promise((resolve, reject) => {
      // can add header in future with authentication token if required in future

      const info = {
        method: "post",
        url: url,
        data: payload,
      };
      console.log("info on post", info);
      axios(info)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log(info);
          console.log("error in get ", error);
          reject(error);
        });
    });
  },
};
