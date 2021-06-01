import {
  Box,
  IconButton,
  makeStyles,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react';

const Drawer = ({
  open,
  title,
  anchor = 'right',
  handleClose,
  children,
  width = 440,
  actions,
}) => {
  const classes = useStyles({ width });

  return (
    <SwipeableDrawer
      open={open}
      variant="temporary"
      anchor={anchor}
      onOpen={handleClose}
      onClose={handleClose}
      classes={{ paper: classes.paper }}
    >
      <Box p={2} className={classes.container}>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box display="flex" flexGrow={1}>
            <IconButton onClick={handleClose}>
              <ArrowBack />
            </IconButton>
          </Box>
          <Box display="flex" flexGrow={2}>
            <Typography variant="subtitle1" className={classes.title}>
              {title}
            </Typography>
          </Box>
        </Box>
        <Box py={2}>{children}</Box>
        {actions && <Box>{actions}</Box>}
      </Box>
    </SwipeableDrawer>
  );
};

export default Drawer;

const useStyles = makeStyles((theme) => ({
  drawer: {},
  paper: {
    zIndex: `90 !important`,
    backgroundColor: theme.palette.common.white,
  },
  title: {
    marginTop: theme.spacing(1),
  },
  container: {
    zIndex: `90 !important`,
    width: 440,
    maxWidth: (props) => props.width,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  },
}));
