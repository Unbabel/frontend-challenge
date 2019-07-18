export async function run(promise: Promise<any>) {
  return await promise
    .then(result => result)
    .catch(error => console.error(error));
}
