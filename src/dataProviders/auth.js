import axios from "axios";

export async function login(userData) {
  try {
    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      userData
    );
    return response.data;
  } catch (e) {
    console.log("Error", e);
    return null;
  }
}
