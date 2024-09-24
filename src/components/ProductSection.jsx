import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Container from "./Container";
import { CircularProgress } from "@mui/material";

const ProductSection = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url =
          selectedCategory === "all"
            ? `https://fakestoreapi.com/products`
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;
        const response = await axios.get(url);
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  return (
    <section className=" p-4">
      <Container>
        <p className=" text-lg md:text-2xl font-bold text-gray-500 mb-4">
          Available Product Lists
        </p>
        <div className=" relative">
          {loading ? (
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75">
              <CircularProgress />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCart key={product.id} product={product} />
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
