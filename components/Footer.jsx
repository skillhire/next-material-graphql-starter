import { Container, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';

const Footer = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      <Container maxWidth="lg">
        <div className={classes.container}>
          <Typography variant="body2">
            Copyright ® {moment().format('YYYY')}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2),
    borderTop: `1px solid ${theme.palette.common.input}`,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
}));
