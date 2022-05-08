import './new.scss';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createCategory } from '../../../action';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const TeachCategoryAdd = (props) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const formdata = new FormData();

    formdata.append('name', name);
    formdata.append('status', status);


    props.createCategory(formdata);
    navigate('/teacher/category');

  };


  return (
    <div className="new">
      <div className="top">
        <h1>Add Category</h1>
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
              <FormControl required sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  disabled
                  placeholder="status"
                  id="demo-simple-select"
                  value={status}
                  label="Status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value={true}>true</MenuItem>
                  <MenuItem value={false}>false</MenuItem>
                </Select>
              </FormControl>


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
  return {};
};

export default connect(mapStateToProps, { createCategory })(TeachCategoryAdd);
