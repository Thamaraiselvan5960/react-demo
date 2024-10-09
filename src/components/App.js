import React , {createContext}from 'react'
import Hook1 from './Hook1'
import Hook2 from './Hook2'
import MainComponent from './MainComponent'

export const LoginContext = createContext();

const App = () => {
  return (
    <LoginContext.Provider value={true}>
    <div>
      <Hook1/>
      <Hook2/>
      <MainComponent/>
    </div>
    </LoginContext.Provider>
  )
}

export default App;
