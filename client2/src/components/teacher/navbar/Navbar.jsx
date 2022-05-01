import "./navbar.scss";
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../../context/darkModeContext";





const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [nav, setNav] = useState(false)

  

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="flex">
          <div className="items sidebar-btn">
            <div className="item">
              <MenuIcon className="icon" onClick={()=> dispatch({ type: "SIDEBAR"})} />            
            </div>
          </div>
          <div className="search">
            <input type="text" placeholder="Search..." />
            <SearchOutlinedIcon />
          </div>
          <div className="items navbar-btn">
            <div className="item" onClick={()=>setNav(!nav)}> 
            <ListOutlinedIcon className="icon" />           
            <div className="counter">2</div>
            </div>
          </div>  
        </div>
        <div className="items nav-menu" style={nav ? {height: '50px'} : {height: '0px'} }>
          
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
