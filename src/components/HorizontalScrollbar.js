import React from 'react';
import { Box } from '@mui/material';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu/dist/types';

import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      { data.map((item) => {
        <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
        >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      }) }
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
