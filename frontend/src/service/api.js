import axios from "axios";

const URL = "http://localhost:9000";

export const uploadFile = async (post) => {
  console.log(post);
  try {
    const imgapi = await axios.post(`${URL}/file/upload`, post);
    console.log(imgapi);
    return imgapi;
  } catch (error) {
    console.log("Error while calling uploadFile ASPI ", error);
  }
};

export const createPost = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost API ", error);
  }
};

export const getAllPost = async (param) => {
  try {
    let response = await axios.get(`${URL}/posts${param}`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllPost API ", error);
  }
};

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/posts/${id}`);
    console.log(response.data, "from getpost");
    return response.data;
  } catch (error) {
    console.log("Error while calling getPost API ", error);
  }
};
export const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${URL}/delete/${id}`);
    console.log(response, "from deletepost api");
    return response;
  } catch (error) {
    console.log("Error while calling deletePost API ", error);
  }
};
