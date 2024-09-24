import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error in categories fetch", error);
    throw error;
  }
};
