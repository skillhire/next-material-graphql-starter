import palette from './palette';

export default {
  h1: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 78,
    '@media (max-width:600px)': {
      fontSize: 54,
    },
    lineHeight: '1.3em'
  },
  h2: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 52,
    '@media (max-width:600px)': {
      fontSize: 42,
    },
    lineHeight: '1.3em'
  },
  h3: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    textIndent: 0,
    fontSize: 36,
    lineHeight: '1.5em'
  },
  h4: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '22px'
  },
  h5: {
    fontFamily: 'Poppins',
    fontWeight: 500,
  },
  h6: {
    fontFamily: 'Poppins',
    fontWeight: 500,
  },
  subtitle1: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '1.5em',
  },
  subtitle2: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '1.5em',
    fontWeight: 500
  },
  body1: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    color: palette.text.primary,
    fontSize: '16px',
    lineHeight: '1.5em'
  },
  body2: {
    fontFamily: 'Roboto',
    color: palette.text.primary,
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: '1.5em',
    textDecoration: 'none'
  },
  button: {
    fontFamily: 'Roboto',
    color: palette.text.primary,
    fontSize: '14px',
  },
  caption: {
    fontFamily: 'Roboto',
    color: palette.text.tertiary,
    fontSize: '15px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '15px',
    textTransform: 'uppercase'
  },
  overline: {
    fontFamily: 'Roboto',
    color: palette.text.secondary,
    fontSize: '15px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '15px',
    textTransform: 'uppercase'
  },
  fontWeightBold: 600
};
