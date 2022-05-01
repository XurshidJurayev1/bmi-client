import React, { useState } from 'react';
import './Courses.scss';
import Json from '../../FakeApi/json';

const Courses = () => {
  const [list, setList] = useState(Json);

  return (
    <div className="blog">
      <h2>Courses</h2>
      <div className="container-fluid">
        <div className="row">
          {
            list.map((item, idx) => {
              return (
                <div className="col-md-3 col-sm-6" key={idx}>
                  <div className="blog__card">
                    <div className="blog__card__price">
                      <p>Price: {item.price}</p>
                    </div>
                    <div className="blog__img">
                      <img src={item.img} alt="png" />
                    </div>
                    <div className="blog__text">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <div>
                        <span className="blog__text__student">{item.students} Students</span>
                        <button className="btn btn-success">More</button>
                      </div>

                    </div>
                    <div className="blog__teach">
                      <img src={item.img} alt="jpg" />
                      <p>{item.teacher.name} {item.teacher.lastName} <span>{item.teacher.job}</span></p>
                    </div>

                  </div>
                </div>
              );
            })
          }


        </div>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="javascriptvoid" className="page-link">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="javascritpVoid">1</a></li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="javascritpVoid">2 <span className="visually-hidden">(current)</span></a>
            </li>
            <li className="page-item"><a className="page-link" href="javascritpVoid">3</a></li>
            <li className="page-item">
              <a className="page-link" href="javascritpVoid">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Courses;