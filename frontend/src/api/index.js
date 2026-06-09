import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

export const GetPosts = () => API.get("/post");

export const CreatePost = (data) =>
  API.post("/post", data);

export const GenerateImageFromPrompt = (data) =>
  API.post("/generateImage", data);