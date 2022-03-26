import React from 'react'
import { useRouter } from 'next/router'
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'

const MenuItem = ({
  handleClick,
  value,
  label,
  active,
  icon: Icon }) => {

  const router = useRouter()

  return(
    <ListItem
      button
      active={ active === value }
      onClick={() => handleClick(value)}
      sx={{ 
        ...sx.listItem, 
        ...(router.query?.pathname === value && sx.active)
      }}
      key={value}
    >
      { Icon &&
        <ListItemIcon>
          { <Icon /> }
        </ListItemIcon>
      }
      <ListItemText
        primary={label}
      />
    </ListItem>
  )
}
export default MenuItem


const sx = {
  root: {
    overflowY: 'scroll',
    backgroundColor: 'common.white'
  },
  toolbar: {
    py: 2,
    px: 3
  },
  active: {
    borderLeft: theme => `5px solid ${theme.palette.primary.main}`,
    fontWeight: theme => theme.typography.fontWeightMedium,
    color: 'primary.main',
    '& $menuIcon': {
      color: 'background.main'
    }
  }
};
