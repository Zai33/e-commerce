import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" w-full md:w-[720px] lg:w-[1080xp] xl:w-[1200px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
