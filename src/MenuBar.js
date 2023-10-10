import React, { useEffect, useState } from 'react'

function Menu() {

  let [darkMode, setDarkMode] = useState(false);

  useEffect (() => {
    if (darkMode){
      document.documentElement.classList.add("dark");
    }else {
      document.documentElement.classList.remove("dark");
    }
    
  }, [darkMode])

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <header className='border-b border-green-950 py-2 '>
      
      <button onClick={() => {
            setDarkMode(!darkMode)
      }} className='absolute right-10 top-2 bg-green-950 text-white px-5 py-0
                          rounded hover:bg-green-900  '> 
                          {darkMode ? "Light" : "Dark"} Mode</button>
        <div className='flex items-center justify-center'>
            hell
        </div>
        
    </header>
  )
}

export default Menu