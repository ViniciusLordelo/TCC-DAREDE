import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarDataAdm } from '../NavbarAdmin/SidebarDataAdm';
import '../Navbar.css'; 
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();

  const hideSidebar = () => setSidebar(!sidebar);

  function Logout(){
    localStorage.removeItem('usuario-login');

    history.push("/")
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars style={{color : '#1B57A6'}} size={30} onClick={hideSidebar} />
          </Link>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={hideSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarDataAdm.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link onClick={item.title == "Sair" ? Logout : null} to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;