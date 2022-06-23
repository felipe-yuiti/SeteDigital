import axios from "axios";

const spaceXApi = axios.create({
  baseURL: "https://api.spacexdata.com/v3",
});

export default spaceXApi;
