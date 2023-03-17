const URL = "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

export async function getMessages() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    alert(
      "An error has occured while getting the data, please try again later."
    );
    return [];
  }
}

export async function uploadMessages(messages) {
  try {
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(messages),
    });
    return res.status;
  } catch (error) {
    alert(
      "An error has occured while uploading the data, please try again later."
    );
    return error.status;
  }
}
