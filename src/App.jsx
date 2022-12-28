import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import './App.css'
import Characters from './components/Characters'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [isDark, setIsDark] = useState(true);
  const queryClient = new QueryClient()

  const toggleModeHandler = (isDark)=>{
    setIsDark(isDark)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`App ${isDark ? 'dark' : 'light'}`}>
        <div className="container">
          <h1>Rick and Morty</h1>
          <Characters />
        </div>
        <DarkModeToggle toggleMode={toggleModeHandler} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
