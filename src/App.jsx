import { useContext } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import Characters from './components/Characters'
import DarkModeToggle from './components/DarkModeToggle'
import ThemeContext from './store/theme-context'

function App() {
  const queryClient = new QueryClient()
  const themeCtx = useContext(ThemeContext)

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`App ${themeCtx.isDarkMode ? 'dark' : 'light'}`}>
        <div className="container">
          <h1>Rick and Morty</h1>
          <Characters />
        </div>
        <DarkModeToggle />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
