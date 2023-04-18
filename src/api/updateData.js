import axios from "axios";

const updateData = axios.create({
  method: "PUT",
  baseURL: "http://localhost:3000",
});

export default updateData;
