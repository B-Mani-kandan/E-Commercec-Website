import React from "react";
import MainCarosel from "../../Components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../Components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/Mens_Kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className=" space-y-10 py-20  flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirts"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's T-shirts"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
