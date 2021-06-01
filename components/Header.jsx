import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Logo from 'assets/logo.svg';
import clsx from 'clsx';
import { DesktopMenu, MobileMenu } from 'components';
import { AppContext } from 'context';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const Header = ({ className }) => {
  const router = useRouter();
  const classes = useStyles();

  const { menuOpen, setMenuOpen, toggleMenu } = useContext(AppContext);

  const handleClick = (path) => {
    setMenuOpen(false);
    router.push(path);
  };

  const handleLogoClick = () => handleClick('/');

  return (
    <div className={clsx(className, classes.root)}>
      <AppBar color="inherit" position="fixed" elevation={0}>
        <Toolbar>
          <div className={classes.container}>
            <Button onClick={handleLogoClick}>
              <img src={Logo} className={classes.logo} alt="logo" />
            </Button>
          </div>
          <div className={classes.menu}>
            <DesktopMenu handleClick={handleClick} />
            <IconButton
              color="primary"
              onClick={toggleMenu}
              className={classes.mobileMenuButton}
            >
              <Menu />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MobileMenu
        open={menuOpen}
        handleClick={handleClick}
        toggleMenu={toggleMenu}
      />
    </div>
  );
};

export default Header;

Header.propTypes = {
  className: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    justifyContent: 'flex-start',
  },
  menuItem: {
    margin: theme.spacing(0, 1),
  },
  mobileMenuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
