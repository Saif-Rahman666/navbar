import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire , FaPoo} from 'react-icons/fa';

function SideBar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-green-950 text-white shadow-lg
                    dark:bg-green-950 dark:text-white'>

            <SideBarIcon icon={<FaFire size='28'/>}/>  
            <SideBarIcon icon={<BsPlus size="32"/>}/>    
            <SideBarIcon icon={<BsFillLightningFill size = "25" />} />
            <SideBarIcon icon={<FaPoo size = "25"/>}/>
            <SideBarIcon icon= {<BsGearFill size={25}/>} />
        
    </div>
  )
}

const SideBarIcon = ({icon, text = 'tooltip 💡'}) => (
    <div className='sidebar-icon group'>
        {icon}

        <span className='sidebar-tooltip group-hover:scale-90'>
            {text}
        </span>
    </div>

   
)
   

export default SideBar