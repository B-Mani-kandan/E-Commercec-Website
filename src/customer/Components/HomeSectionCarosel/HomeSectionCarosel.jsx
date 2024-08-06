// import React, { useState } from "react";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import { Button } from "@headlessui/react";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { mens_kurta } from "../../../Data/Mens_Kurta";

// const HomeSectionCarosel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 4 },
//   };

//   const slidePrev = () => setActiveIndex(activeIndex - 1);
//   const slideNext = () => setActiveIndex(activeIndex + 1);

//   const syncActiveIndex = ({ item }) => setActiveIndex(item);

//   const items = mens_kurta
//     .slice(0, 10)
//     .map((item) => <HomeSectionCard product={item} />);

//   return (
//     <div className="relative px-4 lg:px-8 ">
//       <div className="relative p-5">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           disableDotsControls
//           responsive={responsive}
//           onSlideChanged={syncActiveIndex}
//           activeIndex={activeIndex}
//         />
//         {activeIndex !== items.length - 4 && (
//           <Button
//             className="absolute z-50   text-black  top-32 right-0 "
//             onClick={slideNext}
//             aria-label="next"
//           >
//             <ArrowForwardIosIcon />
//           </Button>
//         )}
//         <Button
//           className="absolute z-50   text-black  top-32 left-0 "
//           aria-label="next"
//           onAuxClick={slidePrev}
//         >
//           <ArrowBackIosIcon />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarosel;

import React, { useState, useRef } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@headlessui/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = data
    .slice(0, 10)
    .map((item, index) => <HomeSectionCard key={index} product={item} />);

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (activeIndex < items.length - responsive[1024].items) {
      setActiveIndex((prevIndex) => prevIndex + 1);
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="relative px-4 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          mouseTracking
        />
        {activeIndex > 0 && (
          <Button
            className="absolute z-50 text-black top-32 left-0"
            aria-label="prev"
            onClick={slidePrev}
          >
            <ArrowBackIosIcon />
          </Button>
        )}
        {activeIndex < items.length - responsive[1024].items && (
          <Button
            className="absolute z-50 text-black top-32 right-0"
            aria-label="next"
            onClick={slideNext}
          >
            <ArrowForwardIosIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
