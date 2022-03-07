import { createContext, useState } from "react"

export const UIContext = createContext()

export const UIProvider = ({children}) => {

  const [isMenuVisible, setIsMenuVisible] = useState(true)

  const hideMenu = () => {
    setIsMenuVisible(false)
  }

  const showMenu = () => {
    setIsMenuVisible(true)
  }

  return (
    <UIContext.Provider
      value={{
        isMenuVisible,
        showMenu,
        hideMenu
      }}
    >
      {children}
    </UIContext.Provider>
  )
}