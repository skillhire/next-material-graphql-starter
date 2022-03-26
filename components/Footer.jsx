import PropTypes from 'prop-types'
import { Box, Container, Typography } from '@mui/material';
import moment from 'moment'

const Footer = ({
    styles,
    ...props
  }) => {

  return(
    <Box sx={{ ...sx.root, ...styles }}>
      <Container maxWidth='lg'>
        <Box sx={ sx.container  }>
          <Typography variant='body2'>
            Copyright ® { moment().format('YYYY') }
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer

const sx = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: theme => `1px solid ${theme.palette.common.input}`,
    backgroundColor: 'background.paper'
  },
  container: {    
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
