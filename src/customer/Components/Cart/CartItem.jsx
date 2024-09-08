import React from "react";
import { Button, IconButton } from "@mui/material";
import { RemoveCircleOutline } from "@mui/icons-material";
import { AddCircleOutline } from "@mui/icons-material";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md mt-5">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://www.bullionknot.com/cdn/shop/files/Georgiamin_7.jpg?v=1715410709"
            alt=""
          />
        </div>
        <div className="ml-5 sapce-y-1">
          <p className="font-semibold">men slim</p>
          <p className="opacity-30">size l-white</p>
          <p className="opacity-70 mt-2">seller: crishtaliyo 2fashion</p>
          <div className="flex space-x-5 items-center  text-gray-900 pt-7">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">₹5% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutline />
          </IconButton>
          <span className="py-1 px-6 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutline />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
