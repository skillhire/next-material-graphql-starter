import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'apollo/client';
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const apolloClient = useApollo();

  const [accessToken, setAccessToken] = useState();
  const [alert, setAlert] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isLoading = () => setLoading(true);
  const isLoaded = () => setLoading(false);

  const initValue = {
    accessToken,
    setAccessToken,

    alert,
    setAlert,
    currentUser,
    setCurrentUser,

    loading,
    isLoading,
    isLoaded,

    menuOpen,
    setMenuOpen,
    toggleMenu,
  };

  return (
    <AppContext.Provider value={initValue}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </AppContext.Provider>
  );
};
