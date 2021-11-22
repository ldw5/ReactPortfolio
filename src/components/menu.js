import {HiMenuAlt3} from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { navigation } from "./navbar";
const Menu = () => {
  //function to open menu button and check if open is set to true
  //when true show header, when false don't show
  const[isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line
  const [links, setLinks] = useState(navigation)
    return (
      <>
      <div className="menu-btn">
          <button onClick={() => setIsOpen(!isOpen)}><HiMenuAlt3/></button>
      </div>   
      <header className={`${isOpen ? 'header open' : ' header'}`}>
        <nav>
          <ul>
          {links.map(({id,title,url}) => {
              return (
                <li key={id} onClick={() => setIsOpen(false)}>
                  <Link to={url}>{title}</Link>
                </li>
              )
            })}
          </ul>
           
        </nav>
    </header>
   
      </>
    );
  }
  export default Menu;