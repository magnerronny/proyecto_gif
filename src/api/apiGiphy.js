import axios from "axios";

export const apiGiphy = axios.create({
  baseURL: "https://api.giphy.com/"
})
