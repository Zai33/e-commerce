import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    <Container>
      <footer className="p-2 bg-black text-white text-center">
        © {date.getFullYear()}{" "}
        <a href="https://mms-it.com" className=" underline text-gray-400">
          MMS IT
        </a>
        . All right reserved.
      </footer>
    </Container>
  );
};

export default Footer;
