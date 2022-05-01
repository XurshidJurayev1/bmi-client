import React, { useState } from 'react';
import './form.scss';
import { connect } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../action';
import { Typography, TextField } from '@mui/material';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import defaultImg from '../../assets/img/js.jpg';


const initialstate = {
  first_name: '',
  last_name: '',
  login: '',
  password: '',
  img: defaultImg,
  role: ['USER'],

};

const Register = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialstate);
  const [password1, setPassword1] = useState('');

  console.log(user);
  const submit = async (e) => {
    e.preventDefault();
    if (user.password === password1) {
      const formdata = new FormData();

      formdata.append('first_name', user.first_name);
      formdata.append('last_name', user.last_name);
      formdata.append('login', user.login);
      formdata.append('password', user.password);
      formdata.append('img', user.img);
      formdata.append('role', user.role);

      props.register(formdata);

      navigate('/login');

    } else {
      console.log('not possible password');
    }

  };
  console.log(props);


  return (
    <div className="d-flex justify-content-center form" style={{ minHeight: '100vh' }}>
      <div className="col-md-3 mt-5 form__main">
        <Typography sx={{ mb: '1.5rem', textAlign: 'center' }} color="primary" variant="h2">Register</Typography>
        <form className="row g-2 needs-validation" noValidate onSubmit={submit}>
          <div className="col-md-4">
            <TextField
              type="text"
              label="First name"
              fullWidth
              placeholder="First Name"
              variant="outlined"
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <TextField
              type="text"
              label="Last Name"
              fullWidth
              placeholder="Last Name"
              variant="outlined"
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <TextField
              type="text"
              label="Login"
              fullWidth
              placeholder="Login"
              variant="outlined"
              value={user.login}
              onChange={(e) => setUser({ ...user, login: e.target.value })}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <TextField
              type="text"
              label="Password"
              fullWidth
              placeholder="Password"
              variant="outlined"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <TextField
              type="text"
              label="Confirm password"
              fullWidth
              placeholder="Confirm password"
              variant="outlined"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                required
                onChange={(e) => setUser({ ...user, img: e.target.files[0] })}
                style={{ display: 'none' }}
              />
            </div>
          </div>


          <div className="col-4">
            <button className="btn btn-primary" type="submit">Register</button>
            <Link to="/login">login</Link>
          </div>
          <div className="col-4">
            <Link to="/">home</Link>
          </div>

        </form>
      </div>

    </div>
  );

};

const mapStateToProps = (state) => {
  return {
    reg: state.register,
  };
};

export default connect(mapStateToProps, { register })(Register);