import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire , FaPoo} from 'react-icons/fa';

function SideBar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-green-950 text-white shadow-lg'>

            <SideBarIcon icon={<FaFire size='25'/>}/>  
            <SideBarIcon icon={<BsPlus size={25}/>}/>    
            <SideBarIcon icon={<BsFillLightningFill size = "20" />} />
            <SideBarIcon icon={<FaPoo size = "25"/>}/>
            <SideBarIcon icon= {<BsGearFill size={25}/>} />
        
    </div>
  )
}

const SideBarIcon = ({icon}) => (
    <div>
        {icon}
    </div>
)
   

export default SideBar