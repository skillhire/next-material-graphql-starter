import { AppContext } from 'context';
import { useContext } from 'react';

const useAlerts = () => {
  const { setAlert } = useContext(AppContext);

  const showAlertError = (message) => setAlert({ message, variant: 'error' });

  const showAlertWarning = (message) =>
    setAlert({ message, variant: 'warning' });

  const showAlertSuccess = (message) =>
    setAlert({ message, variant: 'success' });

  return {
    showAlertError,
    showAlertWarning,
    showAlertSuccess,
  };
};

export default useAlerts;
