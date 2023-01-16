import './App.css'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import About from './About'
import { useEffect } from 'react'

export default function App() {
  useEffect(()=>{
    document.title = "COVID-19 Tracker for New York State"
  },[])
  return (
    <main className="bg-white">
      <Header />
      <About />
      <Search />
      <Footer />
    </main>
  )
}
