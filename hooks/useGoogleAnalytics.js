import { GOOGLE_ANALYTICS_ID, NODE_ENV } from 'lib/constants';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router';

const useGoogleAnalytics = () => {
  const location = useLocation();

  const trackPage = () => {
    if (NODE_ENV !== 'production') return;
    ReactGA.pageview(location.pathname + location.search);
  };

  const initGA = () => {
    if (NODE_ENV !== 'production') return;
    if (GOOGLE_ANALYTICS_ID) {
      ReactGA.initialize(GOOGLE_ANALYTICS_ID);
    }
  };

  useEffect(() => {
    if (location.pathname) {
      trackPage();
    }
  }, [location?.pathname]);

  useEffect(() => {
    initGA();
  }, []);

  return;
};

export default useGoogleAnalytics;
