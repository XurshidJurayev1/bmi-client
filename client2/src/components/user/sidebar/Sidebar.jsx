import './sidebar.scss';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, useNavigate } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext';
import { logout } from '../../../action';
import { connect } from 'react-redux';

const Sidebar = (props) => {
  const { dispatch, sidebar } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {

    const handleWidth = () => {
      setWidth(window.innerWidth);
      func();
    };
    window.addEventListener('resize', handleWidth);

    return () => {
      window.addEventListener('resize', handleWidth);

    };
  }, []);


  const func = () => {
    if (width > 990) {
      return null;
    } else {
      return dispatch({ type: 'CLOSE_SIDE' });
    }
  };


  const active = {
    transform: 'translateX(0px)',
  };

  const unactive = {
    transform: 'translateX(-200px)',
  };

  const logout = () => {
    props.logout();
    navigate('/login');
  };


  return (
    <div className="sidebar" style={sidebar ? active : unactive}>
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">KGD</span>
        </Link>
        <div className="close-btn">
          <CloseIcon className="icon" onClick={() => dispatch({ type: 'CLOSE_SIDE' })} />
        </div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/student">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/student/courses" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Courses</span>
            </li>
          </Link>
          <Link to="/student/teachers" style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className="icon" />
              <span>teachers</span>
            </li>
          </Link>


          <p className="title">USER</p>
          <Link to="/student/profile">
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={logout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        />
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        />
      </div>
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { logout })(Sidebar);
