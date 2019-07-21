import axios, { AxiosPromise } from "axios";
import { ITranscription } from "ts/types/types";
import { run } from "../../utils/promise-utils/promise-utils";

export async function getData(): Promise<AxiosPromise> {
  return await run(
    axios.get("https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c")
  );
}

export async function getTranscriptionList(): Promise<ITranscription[]> {
  const { data } = await getData();

  return data;
}

export function uploadTranscriptionList(
  listToUpdate: ITranscription[]
): Promise<{}> {
  return run(
    axios.post("https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c", listToUpdate)
  );
}
