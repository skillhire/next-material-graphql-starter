import { useEffect } from 'react';

// Helper hook to run a function on Enter key press
const useEnterKey = (onEnter) => {
  const handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      onEnter();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return;
};

export default useEnterKey;
