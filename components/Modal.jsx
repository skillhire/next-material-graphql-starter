import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import PropTypes from 'prop-types';

const Modal = ({
  open,
  handleClose,
  title,
  subtitle,
  actions: buttons,
  children,
  maxWidth = 'sm',
}) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.dialog}
      fullWidth
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle className={classes.title} onClose={handleClose}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="row">
            <Typography variant="subtitle1">{title}</Typography>
          </Box>
          <Box>
            <IconButton size="small" onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        {subtitle && <Typography variant="body1">{subtitle}</Typography>}
        {children}
      </DialogContent>
      {buttons && <DialogActions>{buttons}</DialogActions>}
    </Dialog>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.array,
  buttons: PropTypes.array,
};

export default Modal;

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 10,
    height: 64,
    fontSize: '18px',
    backgroundColor: theme.palette.background.primary,
  },
  dialog: {
    zIndex: 1500,
  },
}));
