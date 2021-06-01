import React, {useState} from 'react'
import {
  Box,
  Divider,
  IconButton,
  List,
  SwipeableDrawer,
  Typography,
  makeStyles
} from '@material-ui/core'
import {MenuItem} from 'components'
import {MENU_ITEMS} from 'lib/constants'

const drawerWidth = 240

const MobileMenu = ({
    open,
    toggleMenu,
    handleClick,
  }) => {

  const [openSettings, setOpenSettings] = useState(false)
  const toggleSettingsMenu = () => setOpenSettings(!openSettings)

  const classes = useStyles();

  return(
    <SwipeableDrawer
      open={ open }
      variant="temporary"
      anchor='right'
      onOpen={ toggleMenu }
      onClose={ toggleMenu }>
        <Box
          className={ classes.drawer }
          display='flex'
          justifyContent='space-between'
          flexDirection='column'
          height='100%'
        >
          <List className={ classes.list } component="nav">
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

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '300px'
  },
  list: {
    height: '100%'
  },
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));