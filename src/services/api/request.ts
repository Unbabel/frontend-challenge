export default function request<R>(url: string, params?: Record<string, unknown>) {
  return fetch(url, params)
    .then((response) => {
      if (response.ok && response.headers.get('Content-Type')?.includes('application/json')) {
        return response.json()
      } else {
        throw new Error(`Unexpected response status ${response.status} or content type`)
      }
    })
    .then((data: R) => {
      return data
    })
    .catch((error) => {
      console.error('Error while fetching data:', error)
    })
}
