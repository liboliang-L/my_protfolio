import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-[#0a0a0a] min-h-screen text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      <Header  
        isLoggedIn={isLoggedIn} 
        onLogin={() => setIsLoggedIn(true)} 
        onRegister={() => console.log('Register clicked')}
        onLogout={() => setIsLoggedIn(false)}
      />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}
