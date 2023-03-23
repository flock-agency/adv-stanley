import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Layout } from './components/Layout'
import { GlobalStyle } from './config/global'
import { defaultTheme } from './config/theme'
import { AreaAtuacao } from './pages/area_atuacao'
import { BlogPage } from './pages/blog'
import { BlogInformation } from './pages/blog/blog'
import { Contato } from './pages/contato'
import { HomePage } from './pages/home'

function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, location.state ? location.state.scrollTop : 0);
  }, [location]);

  return children;
}


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Layout />
              }
            >
              <Route index element={<HomePage />} />
              <Route path='/area-atuacao' element={<AreaAtuacao />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/blog/:id' element={<BlogInformation />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
