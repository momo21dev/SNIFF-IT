
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Products from './components/Products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Products />}/>
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
