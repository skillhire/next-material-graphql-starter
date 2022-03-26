import React, {useState} from 'react'
import { 
  Box, 
  List, 
  SwipeableDrawer, 
} from '@mui/material';
import {MenuItem} from 'components'
import {MENU_ITEMS} from 'lib/constants'

const MobileMenu = ({
    open,
    toggleMenu,
    handleClick,
  }) => {

  const [openSettings, setOpenSettings] = useState(false)

  return(
    <SwipeableDrawer
      open={ open }
      variant="temporary"
      anchor='right'
      onOpen={ toggleMenu }
      onClose={ toggleMenu }>
        <Box
          sx={ sx.drawer  }
          display='flex'
          justifyContent='space-between'
          flexDirection='column'
          height='100%'
        >
          <List sx={ sx.list  } component="nav">
            { MENU_ITEMS.map(({value, label}, idx) => (
              <MenuItem
                key={idx}
                value={value}
                label={ label }
                handleClick={ handleClick }
              />
            ))}
          </List>
      </Box>
    </SwipeableDrawer>
  )
}

export default MobileMenu

const sx = {
  drawer: {
    width: '300px'
  },
  list: {
    height: '100%'
  },
  item: {
    display: 'block',
    py: 0,    
    fontWeight: theme => theme.typography.fontWeightMedium,
  },
};
