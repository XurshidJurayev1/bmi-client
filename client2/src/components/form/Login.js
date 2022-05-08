import React, { useState } from 'react';
import './form.scss';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../action';
import { useEffect } from 'react';
import { Typography, TextField } from '@mui/material';

const Login = (props) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password1, setPassword1] = useState('');

  const submit = (e) => {
    e.preventDefault();


    console.log(props);

    props.login({ login, password: password1 });


  };

  useEffect(() => {

    if (props.role.length > 0 && props.selectedCourse) {
      switch (props.role[0]) {
        case 'USER' :
          return navigate('/student/courses');
        case 'TEACHER' :
          return navigate('/teacher');
        case 'ADMIN' :
          return navigate('/admin');
        default :
          return null;
      }
    }
    if (props.role.length > 0) {
      switch (props.role[0]) {
        case 'USER' :
          return navigate('/student');
        case 'TEACHER' :
          return navigate('/teacher');
        case 'ADMIN' :
          return navigate('/admin');
        default :
          return null;
      }
    }

  }, [props.role]);


  return (
    <div className="d-flex justify-content-center form">
      <div className="col-md-3 mt-5 form__main">
        <Typography sx={{ mb: '1.5rem', textAlign: 'center' }} color="primary" variant="h2">Login</Typography>
        <form className="row  needs-validation" noValidate onSubmit={submit}>
          <div className="col-md-4">
            {/*<label*/}
            {/*  htmlFor="validationCustom01"*/}
            {/*  className="form-label">*/}
            {/*  Login*/}
            {/*</label>*/}
            <TextField
              type="text"
              label="Login"
              fullWidth
              placeholder="Login"
              variant="outlined"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <TextField
              label="Password"
              fullWidth
              placeholder="Password"
              variant="outlined"
              type="password"
              id="validationCustom02"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>


          <div className="col-4">
            <button className="btn btn-primary" type="submit">Login</button>
            <Link to="/register">register</Link>
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
    token: state.token,
    role: state.role,
    user: state.user,
    selectedCourse: state.selectedCourse,
  };
};

export default connect(mapStateToProps, { login })(Login);