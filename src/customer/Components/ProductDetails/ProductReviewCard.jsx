import { Avatar, Grid, Rating, Box } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={5}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            ></Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">ram</p>
              <p className="opacity-70">april 5 ,2023</p>
            </div>
          </div>
          <Rating value={4.5} name="Half-rating" readOnly precision={0.5} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            nulla praesentium, pariatur inventore facilis ex deleniti, magnam
            porro fuga quas in? Ex, aut placeat. Aperiam, inventore illum. Quis,
            assumenda ipsum!
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
