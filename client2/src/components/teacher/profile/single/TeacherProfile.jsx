import './ProfileSingle.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ImageApi } from '../../../../Api/ImageApi';

const TeacherProfile = (props) => {
  const user = props.user;
  console.log(user);
  return (<div className="profileSingle">

    <div className="top">
      <div className="left">
        <Link to="/teacher/profile/edit">
          <div className="editButton">Edit</div>
        </Link>
        <h1 className="title">Information</h1>
        <div className="item">
          <img
            src={user.image_path ? `${ImageApi}${user.image_path}` : 'https://images.pexels.com/photos/733872/pexels-pho…jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}
            alt=""
            className="itemImg"
          />
          <div className="details">
            <h1 className="itemTitle">{user.first_name} {user.last_name}</h1>
            <div className="detailItem">
              <span className="itemKey">login:</span>
              <span className="itemValue">{user.login}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Position:</span>
              <span className="itemValue">{user.position}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Role:</span>
              <span className="itemValue">
                    {user.role}
                  </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(TeacherProfile);
