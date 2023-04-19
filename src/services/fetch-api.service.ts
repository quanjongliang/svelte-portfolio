export async function callApi<T>(url: string, init?: RequestInit): Promise<T> {
  try {
    return fetch(url, init).then((res) => res.json());
  } catch (error) {
    return Promise.reject(error);
  }
}
