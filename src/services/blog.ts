import axios from "axios";

const baseURL = 'https://tespire.tech/wp-json/wp/v2/posts?categories=36'

export const getBlogs = async function () {
  return await axios.get(baseURL)
}