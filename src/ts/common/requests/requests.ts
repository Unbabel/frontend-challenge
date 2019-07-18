import axios from "axios";
import { run } from "../../utils/promise-utils/promise-utils";

async function getData(): Promise<{}> {
  return await run(
    axios.get("https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c")
  );
}

export async function getTranscriptionList(): Promise<{}> {
  const { data } = await run(getData());

  return data;
}
