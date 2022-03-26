import { Box } from '@mui/material'
import { Footer } from 'components'

export default function Layout({ children, ...props }) {

  const footerHeight = 80
  
  return(
    <Box sx={ sx.root  }>
      <Box 
        sx={{ 
          minHeight: `calc(100vh - ${footerHeight}px)` 
        }}>
        { children }
      </Box>
      <Box sx={{ 
          ...sx.footer,
          height: footerHeight  
        }}>
        <Footer />
      </Box>
    </Box>
  )
}

const sx = {
  root: {
    height: '100%'
  },
  footer: {
    width: '100%',
  }
}
