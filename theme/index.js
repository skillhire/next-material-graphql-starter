import breakpoints from 'theme/breakpoints'
import overrides from 'theme/overrides';
import palette from 'theme/palette'
import typography from 'theme/typography'
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  breakpoints,
  palette,
  overrides,
  typography,
  props: {
    MuiButtonBase: {
      disableRipple: true,
      elevation: 0
    }
  }
})
