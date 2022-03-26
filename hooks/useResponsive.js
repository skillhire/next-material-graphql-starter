import {
  useState,
  useEffect,
  useLayoutEffect
} from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

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

  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm','lg'))
  const isDesktop = useMediaQuery(theme.breakpoints.between('md', 'xl'))
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
