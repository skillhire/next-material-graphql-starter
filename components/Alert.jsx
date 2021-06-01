import {
  IconButton,
  makeStyles,
  Slide,
  Snackbar,
  SnackbarContent,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { AppContext } from 'context';
import React, { useContext } from 'react';

const TransitionDown = (props) => <Slide {...props} direction="down" />;

const Alert = () => {
  const classes = useStyles();

  const { alert, setAlert } = useContext(AppContext);

  const handleClose = () => setAlert();

  return (
    <Snackbar
      open={Boolean(alert)}
      onClose={handleClose}
      TransitionComponent={TransitionDown}
      autoHideDuration={2500}
      className={classes.snackbar}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <SnackbarContent
        className={classes.alert}
        message={<Typography variant="subtitle2">{alert?.message}</Typography>}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default Alert;

const useStyles = makeStyles((theme) => ({
  alert: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  snackbar: {
    width: '100%',
  },
}));
