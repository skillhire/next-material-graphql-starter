import React, {createContext, useState} from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'apollo/client'

export const AppContext = createContext()

export const AppProvider = ({ children, ...rest }) => {

  const apolloClient = useApollo()

  const [accessToken, setAccessToken] = useState()
  const [alert, setAlert] = useState()
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const isLoading = () => setLoading(true)
  const isLoaded = () => setLoading(false)

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
    toggleMenu
  }

  return(
    <AppContext.Provider value={ initValue }>
      <ApolloProvider client={apolloClient}>
        { children }
      </ApolloProvider>
    </AppContext.Provider>
  )
}
