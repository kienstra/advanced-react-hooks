import * as React from 'react'

const CountContext = React.createContext()

export const CountProvider = (props) => {
  const [count, setCount] = React.useState(0)
  return <CountContext.Provider value={[count, setCount]} {...props} />
}

export function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useCount() has to be called from within <CountProvider>')
  }

  return context;
}
