import { useContext, useEffect } from 'react'
import { UIContext } from '../context/UIContext'

export const useShowMenu = (value) => {

  const { showMenu, hideMenu } = useContext(UIContext)
  
  useEffect(() => {
    if (value) {
      showMenu()
    } else {
      hideMenu()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
}