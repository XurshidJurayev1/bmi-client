import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { AiOutlineCloseSquare, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Courses',
      path: '/courses',
    },
    {
      name: 'News',
      path: '/news',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand">KGD</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <AiOutlineMenu />
            {/*<span className="navbar-toggler-icon"></span>*/}
            {/*<i className="fa-solid fa-ellipsis-vertical"></i>*/}
          </button>
          <div className="collapse navbar-collapse nvb" id="navbarSupportedContent">
            <button className="navbar-toggler nvb-clos e" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    onClick={() => setOpen(!open)}
                    style={{ position: 'absolute' }}
                    aria-label="Toggle navigation">
              <AiOutlineCloseSquare />
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                routes.map((item, idx) => {
                  return (
                    <li className="nav-item" key={idx}>
                      <NavLink to={item.path} className="nav-link " activeClassName="nav-link active"
                               aria-current="page">{item.name}</NavLink>
                    </li>
                  );
                })
              }


            </ul>
            <div className="d-flex">
              <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
            </div>


          </div>
        </div>
      </nav>
    </div>
  );

};

export default Navbar;