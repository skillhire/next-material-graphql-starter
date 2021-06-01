import {
  Button,
  makeStyles
} from '@material-ui/core'
import clsx from 'clsx'
import { MENU_ITEMS } from 'lib/constants'

const DesktopMenu = ({
    className,
    handleClick, 
    ...rest
  }) => {

  const classes = useStyles()

  return(
    <div className={ clsx(className, classes.root)}>
      { MENU_ITEMS.map((item, i) => (
        <Button
          key={i}
          className={ classes.menuItem }
          onClick={() => handleClick(item.value)}
        >
          { item.label }
        </Button>
      ))}
    </div>
  )
}

export default DesktopMenu

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  menuItem: {
    padding: theme.spacing(1.5,3)
  }
}))
