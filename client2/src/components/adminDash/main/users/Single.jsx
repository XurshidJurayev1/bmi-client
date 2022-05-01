import './single.scss';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ImageApi } from '../../../../Api/ImageApi';

const UserSingle = (props) => {


  return (
    <div className="single">

      <div className="top">
        <div className="left">
          <Link className="editButton" to="/admin/users/edit">Edit</Link>
          <h1 className="title">Information</h1>
          <div className="item">
            <img
              src={
                props.user.image_path
                  ? `${ImageApi}${props.user.image_path}`
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">{props.user.first_name + '  ' + props.user.last_name}</h1>
              <div className="detailItem">
                <span className="itemKey">login:</span>
                <span className="itemValue">{props.user.login}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Role:</span>
                <span className="itemValue">{props.user.role}</span>
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
    user: state.userSingle,
  };
};

export default connect(mapStateToProps, {})(UserSingle);
