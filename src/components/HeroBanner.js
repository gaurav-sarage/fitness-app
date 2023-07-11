import React from 'react';
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: "212px", xs: "70px" },
      ml: { sm: "50px" }
    }} position="relative" p="5px" >
      <Typography color="#FF2625" fontWeight="900" fontSize="30px">
        Fitness Club App
      </Typography>

      <Typography fontWeight="700"
      sx={{ fontSize: { lg: "45px", xs: "40px" }
      }}
      mb="22px" mt="30px"      
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="23px" lineHeight="34px" mb={4}>
        Check out our most effective exercises! 
      </Typography>

      <Button variant="contained" color="error" href="#exercises"
      sx={{ backgroundColor: "FF2625" }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" }
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>

      <img src={HeroBannerImage} alt="Banner Image" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner
