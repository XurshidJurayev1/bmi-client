import './new.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileEdit } from '../../../../action';
import { ImageApi } from '../../../../Api/ImageApi';

const TeacherProfileEdit = (props) => {
  const navigate = useNavigate();
  const user = props.user;
  const [file, setFile] = useState('');
  const [first_name, setFirst_name] = useState(user.first_name);
  const [last_name, setLast_name] = useState(user.last_name);
  const [login, setLogin] = useState(user.login);
  const [password, setPassword] = useState('');

  console.log(props);

  const submit = (e) => {
    e.preventDefault();
    const formdata = new FormData();

    formdata.append('img', file);
    formdata.append('first_name', first_name);
    formdata.append('last_name', last_name);
    formdata.append('login', login);
    formdata.append('password', password);


    if (file.length === 0) {
      window.alert('PLease select image');
    } else {
      props.profileEdit(formdata, user._id);
      navigate('/teacher/profile');
    }

  };

  return (
    <div className="new">
      <div className="top">
        <h1>Profile Edit</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : `${ImageApi}${user.image_path}`
            }
            alt=""
          />
        </div>
        <div className="right">
          <form onSubmit={submit}>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </div>

            <div className="formInput">
              <label>First Name</label>
              <input
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                type="text"
                placeholder="Your First Name" />
            </div>
            <div className="formInput">
              <label>Last Name</label>
              <input
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                type="text"
                placeholder="Your Last Name" />
            </div>
            <div className="formInput">
              <label>Login</label>
              <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                type="text"
                placeholder="Your Login" />
            </div>
            <div className="formInput">
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="New Password" />
            </div>


            <button className="edit_btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    update: state.userEdit,
  };
};

export default connect(mapStateToProps, { profileEdit })(TeacherProfileEdit);
