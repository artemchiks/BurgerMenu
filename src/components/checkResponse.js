export const checkResponse = (response) => {
  if (!response.ok) {
    // throw new Error("Could not fetch");
  }
  return response.json();
};
