import { useContext } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { 
  AppBar, 
  Box,
  Button, 
  IconButton, 
  Toolbar 
} from '@mui/material';
import {
  Menu
} from '@mui/icons-material'
import { AppContext } from 'context'
import Logo from 'assets/logo.svg'
import { DesktopMenu, MobileMenu } from 'components'

const Header = ({ styles, ...props }) => {

  const router = useRouter()

  const {
    menuOpen,
    setMenuOpen,
    toggleMenu
  } = useContext(AppContext)

  const handleClick = (path) => {
    setMenuOpen(false)
    router.push(path)
  }

  const handleLogoClick = () => handleClick('/')

  return (
    <Box 
      sx={{ 
      ...sx.root, 
      ...styles 
      }}
    >
      <AppBar color='inherit' position='fixed' elevation={0}>
        <Toolbar>
          <Box sx={ sx.container  }>
            <Button
              onClick={ handleLogoClick }
            >
              <img
                src={ Logo }
                style={ sx.logo }
              />
            </Button>
          </Box>
          <Box sx={ sx.menu  }>
            <DesktopMenu
              handleClick={ handleClick }
            />
            <IconButton
              color='primary'
              onClick={ toggleMenu }
              size="large">
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenu
        open={ menuOpen }
        handleClick={ handleClick }
        toggleMenu={ toggleMenu }
      />
    </Box>
  );
}

export default Header

Header.propTypes = {
  className: PropTypes.string
}

const sx = {
  root: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1,
  },
  logo: {
    width: 80,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  menuItem: {
    my: 0,
    mx: 1    
  },
}
