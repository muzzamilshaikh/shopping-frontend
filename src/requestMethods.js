import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDk5ODExNWQwMmZlM2ZiZGZhZTE2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTE0OTk2OCwiZXhwIjoxNjQ5NDA5MTY4fQ.BnMGwHvmFl53mS4E6_XOaEOVCt7gJJTjE-kJjRj4Aj8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
