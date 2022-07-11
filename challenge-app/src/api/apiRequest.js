const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const apiRequest = async (url = "", options) => {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      ...options
    });

    if (!response.ok) {
      throw { errCode: response.status, errText: response.statusText };
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw { errText: `request error: ${error}` };
  }
};
