import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrump";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <Container>
      <BreadCrumb currentPage="My Cart" />
      <CartSection />
    </Container>
  );
};

export default MyCart;
