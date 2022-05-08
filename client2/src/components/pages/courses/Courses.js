import React, { useEffect, useState } from 'react';
import './Courses.scss';
import { connect } from 'react-redux';
import Json from '../../FakeApi/json';
import { getCategory, getCourses, selectCourse, usersGet } from '../../../action';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { ImageApi } from '../../../Api/ImageApi';
import { listCategory } from '../../../reducers/adminRed';

const Courses = (props) => {
  const navigate = useNavigate();
  const [categSel, setCategSel] = useState('');

  const render = () => {
    props.usersGet();
    props.getCourses();
    props.getCategory();
  };

  useEffect(() => {
    render();
  }, []);

  const [pageNumber, setPageNumber] = useState(0);

  const listPerPage = 8;
  const pagesVisited = pageNumber * listPerPage;

  console.log(props);

  const selectCateg = (select) => {
    setCategSel(select);
  };

  const clickedCourse = (item) => {
    if (props.user.first_name) {
      navigate('/student/courses');
      props.selectCourse(item);
    } else {
      const result = window.confirm('Please once sign in account');
      if (result) {
        props.selectCourse(item);
        navigate('/login');
      }
    }
  };

  const diplayList = props.list
    .filter(item => categSel === '' ? item : item.category_id === categSel._id)
    .slice(pagesVisited, pagesVisited + listPerPage)
    .map((item, idx) => {
      return (
        <div className="col-md-3 col-sm-6" key={idx}>
          <div className="blog__card">
            <div className="blog__card__price">
              <p>Price: free</p>
            </div>
            <div className="blog__img">
              <img src={`${ImageApi}${item.image_path}`} alt="png" />
            </div>
            <div className="blog__text">
              <h3>{item.title}</h3>
              {/*<p>{item.text}</p>*/}
              <div className="more__btn__student">
                <span className="blog__text__student">{item.joined.length} Students</span>
                <button className="btn btn-success" onClick={() => clickedCourse(item)}>More</button>
              </div>

            </div>
            <div className="blog__teach">
              {
                props.users.filter(user => user._id === item.owner).map(i => {
                  return (
                    <div key={item._id}>
                      <img src={`${ImageApi}${i.image_path}`} alt="jpg" />
                      <p>{i.first_name} {i.last_name} <span>{i.role}</span></p>
                    </div>
                  );
                })

              }

            </div>

          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(props.list.length / listPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="blog">
      <h2>Courses</h2>
      <div className="container-fluid">
        <div className="courses__category">
          <div className="courses__category__item">
            <p onClick={() => selectCateg('')}>all</p>
          </div>

          {
            props.category.filter(item => item.status === 'true').map((item, idx) => {
              return (
                <div key={idx} className="courses__category__item">
                  <p onClick={() => selectCateg(item)}>{item.name}</p>
                </div>
              );
            })
          }
        </div>

        <div className="row">


          {
            props.list ? diplayList : <h1 className="text-center"> Nothing </h1>
          }


        </div>
        <nav aria-label="...">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            renderOnZeroPageCount={null}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'page-item active'}
            activeLinkClassName={'page-link'}
          />


        </nav>
      </div>
    </div>
  );
};

const mapStataToProps = (state) => {
  return {
    list: state.getCourses,
    users: state.getUser,
    category: state.listCategory,
    user: state.user,
  };
};


export default connect(mapStataToProps, {
  getCourses,
  usersGet,
  getCategory,
  selectCourse,
})(Courses);