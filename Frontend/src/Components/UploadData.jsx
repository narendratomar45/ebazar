import React from "react";
import axios from "axios";
import items from "../Data/Data";
const UploadData = async () => {
  try {
    const response = await axios.post("http://localhost:8000/products", items);
    console.log(response.data);
  } catch (error) {
    console.error("Error uploading Data", error);
  }
  return <div></div>;
};
export default UploadData;
