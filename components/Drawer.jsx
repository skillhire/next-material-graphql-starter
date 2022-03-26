import React, {useState} from 'react'
import { Box, IconButton, Button, List, Container, SwipeableDrawer, Typography } from '@mui/material';

import { Panel } from 'components'
import {ArrowBack, Clear, Close} from '@mui/icons-material'

const Drawer = ({
    open,
    title,
    anchor='right',
    subtitle,
    handleClose,
    children,
    width=440,
    actions,
    ...props
  }) => {

  const classes = useStyles({ width })

  return (
    <SwipeableDrawer
      open={ open }
      variant="temporary"
      anchor={anchor}
      onOpen={ handleClose }
      onClose={ handleClose }
      PaperProps={{ 
        sx: sx.paper 
      }}
    >
      <Box p={2}sx={{ 
          ...sx.container,
          maxWidth: width, 
        }}>
        <Box display='flex' justifyContent='space-between' width='100%'>
          <Box display='flex' flexGrow={1}>
            <IconButton onClick={ handleClose } size="large">
              <ArrowBack />
            </IconButton>
          </Box>
          <Box display='flex' flexGrow={2}>
            <Typography variant='subtitle1' sx={ sx.title  }>
              { title }
            </Typography>
          </Box>
        </Box>
        <Box py={2}>
          { children }
        </Box>
        { actions &&
          <Box>
            { actions }
          </Box>
        }
      </Box>
    </SwipeableDrawer>
  );
}

export default Drawer

const sx = {
  drawer: {
  },
  paper: {
    zIndex: `90 !important`,
    backgroundColor: 'common.white'
  },
  title: {
    mt: 1
  },
  container: {
    zIndex: `90 !important`,
    width: '100%',
    width: {
      sm: 440,
      xs: '100vw'
    }
  }
}
