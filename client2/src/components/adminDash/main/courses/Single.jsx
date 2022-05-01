import './single.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ImageApi } from '../../../../Api/ImageApi';


const CoursesSingle = (props) => {


  console.log(props);

  function createMarkup(text) {
    return { __html: `${text}` };
  }

  const users = props.users;

  const owner = users.filter(user => user._id === props.item.owner);
  console.log(owner);
  const categ = props.categories.filter(category => category._id === props.item.category_id);
  return (
    <div className="single">

      <div className="top">
        <div className="left">
          <Link to="/admin/courses/edit" className="editButton">Edit</Link>
          <h1 className="title">Course</h1>
          <div className="item">
            <img
              src={`${ImageApi}${props.item.image_path}`}
              alt=""
              className="CourseImg"
            />
            <div className="details">
              <h1 className="itemTitle">Title: {props.item.title} </h1>
              <div className="detailItem">
                <span className="itemKey">link: </span>
                <span className="itemValue">{props.item.link}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Content: </span>
                <span className="itemValue">
                  <div dangerouslySetInnerHTML={createMarkup(props.item.text)} />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">owner: </span>
                <span className="itemValue">{owner && owner[0].first_name}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">category: </span>
                <span className="itemValue">{categ[0].name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.selectedCourse,
    users: state.getUser,
    categories: state.listCategory,
  };
};

export default connect(mapStateToProps, {})(CoursesSingle);
