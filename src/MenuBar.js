import React from 'react'

function Menu() {

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <header className='border-b border-green-950 py-2 '>
      
      <button onClick={toggleTheme} className='absolute right-10 top-2 bg-green-950 text-white px-5 py-0
                          rounded hover:bg-green-900  '>Dark mode</button>
        <div className='flex items-center justify-center'>
            hell
        </div>
        
    </header>
  )
}

export default Menu