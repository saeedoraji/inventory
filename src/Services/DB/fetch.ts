export const fetchApi = {
  async get(url: string) {
    let response = await fetch(url);
    return response.json();
  },
  async post(url: string, data: any) {
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
