import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import './TeacherOutlet.scss';
import Widget from '../../components/adminDash/widget/Widget';
import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { Outlet } from 'react-router-dom';
import { getCategory, getContactList, getCourses, listNews, usersGet } from '../../action';
import { connect } from 'react-redux';

const AdminOutlet = (props) => {
  const { sidebar } = useContext(DarkModeContext);
  const [width, setWidth] = useState(window.innerWidth);

  const render = () => {
    props.getCategory();
    props.getCourses();
    props.users();
  };

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWidth);

    return () => {
      window.addEventListener('resize', handleWidth);
    };
  }, []);


  return (
    <div className="admin">
      <Sidebar />
      <div className={sidebar && width > 990 ? 'homeContainer activeDesk' : 'homeContainer'}>
        <Navbar />
        <div className="widgets">
          <Widget type="users" amount={props.users.length} diff="20" />
          <Widget type="courses" amount={props.courses.length} diff="10" />
          <Widget type="earning" amount="25" diff="35" />
          <Widget type="balance" amount="350" diff="25" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.getUser,
    courses: state.getCourses,
  };
};

const mapDispatchToProps = () => {
  return {
    getCategory,
    getContactList,
    usersGet,
    listNews,
    getCourses,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOutlet);
