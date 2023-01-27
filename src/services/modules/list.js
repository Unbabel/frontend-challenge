import axios from "axios";
import API from "@/api/index";

async function GET_LIST() {
  let response = [];
  await axios
    .get(API.list.getList)
    .then(function (res) {
      // handle success
      if (res.status === 200) {
        response = [...res.data];
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return response;
}

async function POST_LIST(payload) {
  await axios.post(API.list.postList, payload).catch(function (error) {
    // handle error
    console.log(error);
  });
}

export default { GET_LIST, POST_LIST };
