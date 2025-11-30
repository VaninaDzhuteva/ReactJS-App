import { Routes, Route } from 'react-router';
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Footer from './components/footer/Footer.jsx';
import './App.css'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/recipes' element={<Home />}></Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
