import React from 'react';
import './UserCourse.scss';
import { connect } from 'react-redux';
import { ImageApi } from '../../../../Api/ImageApi';

const UserCourses = (props) => {
  const course = props.course;
  console.log(course);

  function createMarkup(text) {
    return {
      __html: `${text}`,
    }
      ;
  };

  return (
    <div className="userCourses">
      <div className="container_user_courses">
        <div className="item_user_course">
          <div className="img_user_course ">
            <img src={`${ImageApi}${course.image_path}`} alt="png" />
          </div>
          <h2>{course.title}</h2>
          <a href={course.link} target="_blank" rel="noreferrer">link</a>
          <div dangerouslySetInnerHTML={createMarkup(course.text)} className="create_markup" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    course: state.selectedCourse,
  };
};

export default connect(mapStateToProps, {})(UserCourses);