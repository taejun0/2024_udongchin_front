import { instance } from "./instance";

export const fetchAllLocations = async () => {
  const response = await instance.get("/api/post/qa");
  return response.data;
};

export const fetchMyLocations = async () => {
  const response = await instance.get("/api/mypage/post");
  return response.data;
};