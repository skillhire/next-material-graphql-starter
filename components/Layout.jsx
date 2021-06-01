import { makeStyles } from '@material-ui/core';
import { Footer } from 'components';

export default function Layout({ children }) {
  const classes = useStyles({ footerHeight: 80 });

  return (
    <div className={classes.root}>
      <div className={classes.content}>{children}</div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
  content: {
    minHeight: (props) => `calc(100vh - ${props.footerHeight}px)`,
  },
  footer: {
    width: '100%',
    height: (props) => props.footerHeight,
  },
}));
