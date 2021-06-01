import { AppContext } from 'context';
import { useContext } from 'react';

const useLoaders = () => {
  const { isLoading, isLoaded, setIsLoading, setIsLoaded } =
    useContext(AppContext);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return {
    isLoading,
    isLoaded,
    setIsLoading,
    setIsLoaded,
    showLoading,
    hideLoading,
  };
};

export default useLoaders;
