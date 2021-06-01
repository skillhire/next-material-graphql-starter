import {
  useState,
  useEffect,
  useLayoutEffect
} from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const BREAKPOINTS = {
  "xs": 0,
  "sm": 600,
  "md": 960,
  "lg": 1280,
  "xl": 1920
}

const useResponsive = ({ ...props }) => {

  const theme = useTheme();

  const [breakpoint, setBreakpoint] = useState('lg')

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm','md'))
  const isDesktop = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isSuperLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    if(isMobile) setBreakpoint('sm');
    if(isTablet) setBreakpoint('md');
    if(isDesktop) setBreakpoint('lg');
    if(isSuperLargeDesktop) setBreakpoint('xl');
  }, [isMobile,isTablet, isDesktop, isSuperLargeDesktop])

  return {
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isSuperLargeDesktop,
  }
}

export default useResponsive
