export const checkResponse = async (response: Response): Promise<any> => {
  if (!response.ok) {
      throw new Error("Could not fetch");
  }

  return response.json(); 
};