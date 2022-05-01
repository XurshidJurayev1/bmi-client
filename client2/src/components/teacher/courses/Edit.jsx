import './new.scss';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCategory, updateCourse } from '../../../action';
import 'react-quill/dist/quill.snow.css';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import EditorToolbar, { formats, modules } from './EditorToolbar';
import ReactQuill from 'react-quill';

const TeachCoursesEdit = (props) => {
  const navigate = useNavigate();
  const [file, setFile] = useState('');
  const [title, setTitle] = useState(props.item.title);
  const [text, setText] = useState(props.item.text);
  const [link, setLink] = useState(props.item.link);
  const [category_id, setCategory_id] = useState(props.item.category_id);
  const [owner, setOwner] = useState(props.item.owner);


  console.log(props);
  console.log(category_id);

  const submit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    if (!file) {
      window.alert('Please select image');
    } else {
      formdata.append('img', file);
      formdata.append('title', title);
      formdata.append('text', text);
      formdata.append('link', link);


      props.updateCourse(props.item._id, formdata);

      if (window.location.pathname === '/admin/courses/edit') {
        navigate('/admin/courses');
      }
      if (window.location.pathname === '/teacher/courses/edit') {
        navigate('/teacher/courses');
      }
      if (window.location.pathname === '/student/courses/edit') {
        navigate('/student/courses');
      }

      // if (props.news) {
      //   setFile('');
      //   setTitle('');
      //   setText('');
      //   setLink('');
      // }
      //


    }

  };
  console.log(window.location.pathname);

  useEffect(() => {
    props.getCategory();
  }, []);


  // function createMarkup() {
  //   return { __html: `${text}` };
  // }
  const ownerUser = props.users.filter(user => user._id === props.item.owner);

  console.log(ownerUser);
  return (
    <div className="new">
      <div className="top">
        <h1>Add News</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            className="news_img"
            src={
              file
                ? URL.createObjectURL(file)
                : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
            }
            alt=""
          />
          <div>
            {
              file ?
                null
                :
                <p>Please select image</p>
            }
          </div>
          {/*<div dangerouslySetInnerHTML={createMarkup()} />*/}

        </div>
        <div className="right">
          <form onSubmit={submit}>
            <div className="inputs">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  // required
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
              {/*<div className="formInput">*/}
              {/*  <label>Title</label>*/}
              <TextField
                required
                sx={{ mb: '25px' }}
                label="Title"
                fullWidth
                variant="outlined"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title" />
              {/*</div>*/}

              {/*<div className="formInput">*/}
              {/*<label>Link</label>*/}
              <TextField
                required
                label="Link"
                fullWidth
                variant="outlined"
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="link" />
              {/*</div>*/}
            </div>
            <FormControl required sx={{ Width: 230 }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              {
                props.categories.length > 0 ?
                  <Select
                    required
                    disabled
                    placeholder="status"
                    value={category_id}
                    label="Category"
                    onChange={(e) => setCategory_id(e.target.value)}
                  >
                    {
                      props.categories.filter(i => i.status = true).map(categ => {
                        return <MenuItem key={categ._id} value={categ._id}>{categ.name}</MenuItem>;
                      })
                    }

                  </Select>
                  :
                  <Typography> Not found category. Please once add category. </Typography>
              }
            </FormControl>
            <FormControl required sx={{ Width: 230 }}>
              <InputLabel id="demo-simple-select-label">Owner</InputLabel>
              {
                ownerUser.length > 0 ?
                  <Select
                    required
                    disabled
                    placeholder="status"
                    value={owner}
                    label="Category"
                    onChange={(e) => setOwner(e.target.value)}
                  >
                    {
                      ownerUser.map(item => {
                        console.log(item);
                        return <MenuItem key={item._id} value={item._id}>{item.first_name}</MenuItem>;
                      })
                    }

                  </Select>
                  :
                  <Typography> Not found owner. Please once add owner. </Typography>
              }
            </FormControl>
            <div className="quil_editor">
              <EditorToolbar toolbarId={'t2'} />
              <ReactQuill
                required
                theme="snow"
                value={text}
                onChange={(NewContent) => setText(NewContent)}
                placeholder={'Write something news text...'}
                modules={modules('t2')}
                formats={formats}
              />
              <button type="submit" className="new_button">Send</button>
            </div>


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
    item: state.selectedCourse,
    users: state.getUser,
    categories: state.listCategory,

  };
};

export default connect(mapStateToProps, { getCategory, updateCourse })(TeachCoursesEdit);
