import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

const MenuItem = ({ handleClick, value, label, active, icon: Icon }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <ListItem
      button
      active={active === value}
      onClick={() => handleClick(value)}
      className={clsx(classes.listItem, {
        [classes.active]: router.query?.pathname === value,
      })}
      key={value}
    >
      {Icon && <ListItemIcon>{<Icon />}</ListItemIcon>}
      <ListItemText primary={label} />
    </ListItem>
  );
};
export default MenuItem;

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: 'scroll',
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    padding: theme.spacing(2, 3),
  },
  active: {
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main,
    '& $menuIcon': {
      color: theme.palette.background.main,
    },
  },
}));
