import breakpoints from 'theme/breakpoints'
import components from 'theme/components';
import palette from 'theme/palette'
import typography from 'theme/typography'
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints,
  palette,
  components,
  typography,
  props: {
    MuiButtonBase: {
      disableRipple: true,
      elevation: 0
    }
  }
})
