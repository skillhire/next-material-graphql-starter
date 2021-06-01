import PropTypes from 'prop-types'
import { Link as NextLink } from 'next/link'
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core'
import clsx from 'clsx'
import Logo from 'assets/logo.svg'
import moment from 'moment'

const Footer = ({
    className,
    ...props
  }) => {

  const classes = useStyles()

  return(
    <div className={ clsx(className, classes.root) }>
      <Container maxWidth='lg'>
        <div className={ classes.container }>
          <Typography variant='body2'>
            Copyright ® { moment().format('YYYY') }
          </Typography>
        </div>
      </Container>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4,2),
    borderTop: `1px solid ${theme.palette.common.input}`,
    backgroundColor: theme.palette.background.paper
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  }
}))
