import React from 'react';
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: "210px", xs: "70px" },
      ml: { sm: "50px" }
    }} position="relative" p="20px" >
      <Typography color="#FF2625" fontWeight="650" fontSize="25px">
        Fitness Club App
      </Typography>

      <Typography fontWeight="700"
      sx={{ fontSize: { lg: "45px", xs: "40px" }}}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="23px" lineHeight="34px" mb={2}>
        Check out our most effective exercises! 
      </Typography>

      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>

      <img src={HeroBannerImage} alt="Banner Image" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner
