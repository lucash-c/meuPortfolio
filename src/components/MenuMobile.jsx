import { IoClose } from 'react-icons/io5'
import { HiMenuAlt1 } from 'react-icons/hi'
import Sidebar from './Sidebar'

import '../styles/components/menumobile.sass';
import { useState } from 'react';


const MenuMobile = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const toggleMenu = () => {
        setMenuIsVisible(!menuIsVisible)

    }

    return (
        <div id="menu" >

            <>
                {
                    menuIsVisible && <IoClose className='close-icon' onClick={() => (toggleMenu())} />
                }
                {
                    menuIsVisible && <Sidebar />
                }
                {
                    !menuIsVisible && <HiMenuAlt1 className="menu-hamb" onClick={() => (toggleMenu())} />
                }


            </>


        </div>
    )
}

export default MenuMobile