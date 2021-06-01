import { useContext } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core'
import {
  Menu
} from '@material-ui/icons'
import { AppContext } from 'context'
import Logo from 'assets/logo.svg'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { DesktopMenu, MobileMenu } from 'components'
import { MENU_ITEMS } from 'lib/constants'

const Header = ({ className, ...props }) => {

  const router = useRouter()
  const classes = useStyles()

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

  return(
    <div className={clsx(className, classes.root)}>
      <AppBar color='inherit' position='fixed' elevation={0}>
        <Toolbar>
          <div className={ classes.container }>
            <Button
              onClick={ handleLogoClick }
            >
              <img
                src={ Logo }
                className={classes.logo}
              />
            </Button>
          </div>
          <div className={ classes.menu }>
            <DesktopMenu
              handleClick={ handleClick }
            />
            <IconButton
              color='primary'
              onClick={ toggleMenu }
              className={ classes.mobileMenuButton }>
              <Menu />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MobileMenu
        open={ menuOpen }
        handleClick={ handleClick }
        toggleMenu={ toggleMenu }
      />
    </div>
  )
}

export default Header

Header.propTypes = {
  className: PropTypes.string
}

const useStyles = makeStyles(theme => ({
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
    margin: theme.spacing(0, 1)
  },
  mobileMenuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}))
