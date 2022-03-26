import { Box, Button } from '@mui/material';
import { MENU_ITEMS } from 'lib/constants'

const DesktopMenu = ({
    styles,
    handleClick, 
    ...rest
  }) => {

  return(
    <Box sx={{ ...sx.root, ...styles }}>
      { MENU_ITEMS.map((item, i) => (
        <Button
          key={i}
          sx={ sx.menuItem  }
          onClick={() => handleClick(item.value)}
        >
          { item.label }
        </Button>
      ))}
    </Box>
  )
}

export default DesktopMenu

const sx = {
  root: {
    display: {
      xs: 'none',
      sm: 'block',
    }
  },
  menuItem: {
    py: 1.5,
    px: 3
  }
}
