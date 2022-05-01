import './new.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, TextField, Select, MenuItem } from '@mui/material';
import { updateUserAction } from '../../../../action';
import { ImageApi } from '../../../../Api/ImageApi';


const UserEdit = (props) => {
  const initialstate = {
    img: props.user.image_path,
    first_name: props.user.first_name,
    last_name: props.user.last_name,
    login: props.user.login,
    password: '',
    role: props.user.role,

  };
  const [user, setUser] = useState(initialstate);


  const submit = () => {
    const formdata = new FormData();

    formdata.append('first_name', user.first_name);
    formdata.append('last_name', user.last_name);
    formdata.append('login', user.login);
    formdata.append('password', user.password);
    formdata.append('img', user.img);
    formdata.append('role', user.role);

    props.updateUserAction(formdata, props.user._id);
  };

  console.log(props);

  return (
    <div className="new">
      <div className="top">
        <h1>{props.title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              user.img
                ? `${ImageApi}${props.user.image_path}` || 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                : URL.createObjectURL(user.img)
            }
            alt=""
          />
        </div>
        <div className="right">
          <div className="row g-2 needs-validation" style={{
            padding: '25px 0', display: 'flex', flexDirection: 'column',
          }}>
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
            <Box className="col-md-4" sx={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center ',
            }}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setUser({ ...user, img: e.target.files[0] })}
                  style={{ display: 'none' }}
                />
              </div>
              <Select

                id="demo-simple-select"
                value={user.role}
                label="Role"
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <MenuItem value={'ADMIN'}>Admin</MenuItem>
                <MenuItem value={'USER'}>User</MenuItem>
                <MenuItem value={'TEACHER'}>Teacher</MenuItem>
              </Select>
            </Box>


            <div className="col-4">
              <button className="btn btn-primary" onClick={submit}>Update</button>
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
    update: state.upadetUser,
  };
};

export default connect(mapStateToProps, { updateUserAction })(UserEdit);
