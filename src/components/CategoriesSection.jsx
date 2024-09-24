import React, { useEffect, useState } from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";
import { fetchCategories } from "../api/api";
import { CircularProgress } from "@mui/material";
import ProductSection from "./ProductSection";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("all");

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error setting categories", error);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setActive(category);
  };

  return (
    <section className=" flex flex-col items-start gap-4 p-4">
      <Container>
        <p className=" text-lg md:text-2xl font-bold text-gray-500">
          Product Categories
        </p>
        <div className=" flex flex-wrap gap-4 p-4 relative">
          {loading ? (
            <div className="absolute inset-0 flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <>
              <CategoryBtn
                name="all"
                current={active === "all"}
                onClick={() => handleCategoryClick("all")}
              />
              {categories.map((category) => (
                <CategoryBtn
                  key={category}
                  name={category}
                  current={active === category}
                  onClick={() => handleCategoryClick(category)}
                />
              ))}
            </>
          )}
        </div>
        <ProductSection selectedCategory={active} key={active} />
      </Container>
    </section>
  );
};

export default CategoriesSection;
