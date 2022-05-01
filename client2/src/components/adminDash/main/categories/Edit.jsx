import './new.scss';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateCateg } from '../../../../action';
import 'react-quill/dist/quill.snow.css';
import { Box, MenuItem, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CategoryEdit = (props) => {
  const [name, setName] = useState(props.item.name);
  const [status, setStatus] = useState(props.item.status);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const formdata = new FormData();

    formdata.append('name', name);
    formdata.append('status', status);


    props.updateCateg(props.item._id, formdata);
    navigate('/admin/category');

  };


  return (
    <div className="new">
      <div className="top">
        <h1>Edit Category</h1>
      </div>
      <div className="bottom">

        <div className="right">
          <form onSubmit={submit}>
            <Box sx={{
              p: '25px 15px',
            }}>


              <div className="col-md-4" style={{ marginBottom: '20px' }}>
                <TextField
                  type="text"
                  label="Category name"
                  fullWidth
                  placeholder="First Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>


              <div className="formInput">
                <div className="col-md-4">
                  <Select

                    placeholder="status"
                    id="demo-simple-select"
                    value={status}
                    label="Role"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <MenuItem value={true}>true</MenuItem>
                    <MenuItem value={false}>false</MenuItem>
                  </Select>
                </div>
              </div>

            </Box>


            <button type="submit" className="new_button">Send</button>

          </form>
        </div>
        <div>
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.selectCategory,
  };
};

export default connect(mapStateToProps, { updateCateg })(CategoryEdit);
