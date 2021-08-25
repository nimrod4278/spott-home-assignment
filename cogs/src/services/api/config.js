import axios from "axios";

const SERVER_URL = process.env.SERVER_URL || "http://localhost:5000";

export default axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  }
});