import React, {useContext} from 'react'
import {AppContext} from 'context'

const useLoaders = (props) => {

  const {
    isLoading,
    isLoaded,
    setIsLoading,
    setIsLoaded
  } = useContext(AppContext)

  const showLoading = () => setIsLoading(true)
  const hideLoading = () => setIsLoading(false)

  return {
    isLoading,
    isLoaded,
    setIsLoading,
    setIsLoaded,
    showLoading,
    hideLoading
  }
}

export default useLoaders
