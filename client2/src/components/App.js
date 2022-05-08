import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { productInputs, userInputs } from '../formSource';
import '../style/dark.scss';
import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DarkModeContext } from '../context/darkModeContext';
import AdminOutlet from './adminDash/AdminOutlet';
import AdminIndex from './adminDash/AdminIndex';

import DefaultLayout from './DefaultLayout';
import Home from './pages/home';

import Login from './form/Login';
import Register from './form/Register';

import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import Courses from './pages/courses/Courses';


import Notfoundpage from './404/NotFoundpage';

import Profile from './adminDash/main/profile/single/Profile';
import ProfileEdit from './adminDash/main/profile/new/ProfileEdit';

import UserList from './adminDash/main/users/List';
import UserSingle from './adminDash/main/users/Single';
import UserNew from './adminDash/main/users/New';
import UserEdit from './adminDash/main/users/UserEdit';

import NewsList from './adminDash/main/new/pages/List';
import NewsAdd from './adminDash/main/new/pages/New';
import NewsSingle from './adminDash/main/new/pages/Single';

import List from './adminDash/pages/list/List';
import Single from './adminDash/pages/single/Single';
import New from './adminDash/pages/new/New';
import About from './pages/about';
import MsgContactList from './adminDash/main/msgContact/List';
import MsgSingle from './adminDash/main/msgContact/Single';
import UserOutlet from './user/UserOutlet';
import UserIndex from './user/UserIndex';
import TeacherOutlet from './teacher/TeacherOutlet';
import TeacherIndex from './teacher/TeacherIndex';
import CategoryList from './adminDash/main/categories/List';
import CategorySingle from './adminDash/main/categories/Single';
import CategoryAdd from './adminDash/main/categories/New';
import CategoryEdit from './adminDash/main/categories/Edit';
import CoursesEdit from './adminDash/main/courses/Edit';
import CoursesList from './adminDash/main/courses/List';
import CoursesSingle from './adminDash/main/courses/Single';
import CoursesAdd from './adminDash/main/courses/New';
import UserProfileEdit from './user/profile/new/UserProfileEdit';
import UserProfile from './user/profile/single/UserProfile';
import TeacherProfile from './teacher/profile/single/TeacherProfile';
import TeacherProfileEdit from './teacher/profile/new/TeacherProfileEdit';
import TeachCoursesList from './teacher/courses/List';
import TeachCoursesSingle from './teacher/courses/Single';
import TeachCoursesEdit from './teacher/courses/Edit';
import TeachCoursesAdd from './teacher/courses/New';
import TeachCategoryAdd from './teacher/categories/New';
import TeachCategoryList from './teacher/categories/List';
import SingleNews from './pages/news/SingleNews';
import UserCourses from './user/components/Courses/UserCourses';


const App = (props) => {
  const { darkMode } = useContext(DarkModeContext);
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);
  const [teacher, setTeacher] = useState(false);

  const func = () => {
    if (props.role.length > 0) {
      switch (props.role[0]) {
        case 'ADMIN' || 10 :
          return setAdmin(true);
        case 'USER' || 0 :
          return setUser(true);
        case 'TEACHER' || 1 :
          return setTeacher(true);
        default:
          return null;
      }
    } else {
      return null;
    }

  };

  useEffect(() => {
    func();
    console.log(props);

  }, [props.role]);

  console.log(admin);
  console.log(user);
  console.log(teacher);


  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>

          {
            admin &&
            <Route path="/admin/*" element={<AdminOutlet />}>
              <Route index element={<AdminIndex />} />
              <Route path="profile">
                <Route index element={<Profile />} />
                <Route path=":userId" element={<UserSingle />} />
                <Route
                  path="edit"
                  element={<ProfileEdit />}
                />
              </Route>
              <Route path="users">
                <Route index element={<UserList />} />
                <Route path=":userId" element={<UserSingle />} />
                <Route path="edit" element={<UserEdit />} />
                <Route
                  path="new"
                  element={<UserNew title="Add New User" />}
                />
              </Route>
              <Route path="msgContact">
                <Route index element={<MsgContactList />} />
                <Route path=":id" element={<MsgSingle />} />
              </Route>
              <Route path="news">
                <Route index element={<NewsList />} />
                <Route path=":newsId" element={<NewsSingle />} />
                <Route
                  path="new"
                  element={<NewsAdd inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="category">
                <Route index element={<CategoryList />} />
                <Route path="view">
                  <Route path=":categoryId" element={<CategorySingle />} />
                </Route>
                <Route path="edit" element={<CategoryEdit />} />
                <Route
                  path="new"
                  element={<CategoryAdd />}
                />
              </Route>
              <Route path="courses">
                <Route index element={<CoursesList />} />
                <Route path="view">
                  <Route path=":categoryId" element={<CoursesSingle />} />
                </Route>
                <Route path="edit" element={<CoursesEdit />} />
                <Route
                  path="new"
                  element={<CoursesAdd />}
                />
              </Route>
              <Route path="*" element={<Notfoundpage />} />
            </Route>
          }

          {
            user &&
            <Route path="/student/*" element={<UserOutlet />}>
              <Route index element={<UserIndex />} />
              <Route path="profile">
                <Route index element={<UserProfile />} />
                <Route path=":userId" element={<UserSingle />} />
                <Route
                  path="edit"
                  element={<UserProfileEdit />}
                />
              </Route>
              <Route path="courses">
                <Route index element={<UserCourses />} />
              </Route>
              <Route path="*" element={<Notfoundpage />} />
            </Route>
          }

          {
            teacher &&
            <Route path="/teacher/*" element={<TeacherOutlet />}>
              <Route index element={<TeacherIndex />} />
              <Route path="profile">
                <Route index element={<TeacherProfile />} />
                <Route path=":userId" element={<TeacherProfile />} />
                <Route
                  path="edit"
                  element={<TeacherProfileEdit />}
                />
              </Route>
              <Route path="category">
                <Route index element={<TeachCategoryList />} />
                {/*<Route path="view">*/}
                {/*  <Route path=":categoryId" element={<CategorySingle />} />*/}
                {/*</Route>*/}
                {/*<Route path="edit" element={<CategoryEdit />} />*/}
                <Route
                  path="new"
                  element={<TeachCategoryAdd />}
                />
              </Route>
              <Route path="courses">
                <Route index element={<TeachCoursesList />} />
                <Route path="view">
                  <Route path=":categoryId" element={<TeachCoursesSingle />} />
                </Route>
                <Route path="edit" element={<TeachCoursesEdit />} />
                <Route
                  path="new"
                  element={<TeachCoursesAdd />}
                />
              </Route>
            </Route>
          }

          <Route path="/" exact={true} element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/news">
              <Route index element={<News />} />
              <Route path=":id" element={<SingleNews />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
          </Route>


          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<Notfoundpage />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    role: state.role,
    token: state.token,
  };
};


export default connect(mapStateToProps, {})(App);
