import './new.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createCourse, getCategory } from '../../../../action';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CoursesAdd = (props) => {
  const navigate = useNavigate();
  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [category_id, setCategory_id] = useState('');


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
      formdata.append('owner', props.user._id);
      formdata.append('category_id', category_id);


      props.createCourse(formdata);

      if (props.news) {
        setFile('');
        setTitle('');
        setText('');
        setLink('');
      }

      navigate('/admin/courses');
    }


  };

  useEffect(() => {
    props.getCategory();
  }, []);


  // function createMarkup() {
  //   return { __html: `${text}` };
  // }


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
                  required
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
              {/*<div className="formInput">*/}
              {/* <label>Title</label> */}
              <TextField
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
                props.category.length > 0 ?
                  <Select
                    placeholder="status"
                    id="demo-simple-select"
                    value={category_id}
                    label="Category"
                    onChange={(e) => setCategory_id(e.target.value)}
                  >
                    {
                      props.category.filter(i => i.status = true).map(categ => {
                        return <MenuItem key={categ._id} value={categ._id}>{categ.name}</MenuItem>;
                      })
                    }

                  </Select>
                  :
                  <Typography> Not found category. Please once add category. </Typography>
              }
            </FormControl>


            <div className="quil_editor">
              <EditorToolbar toolbarId={'t2'} />
              <ReactQuill
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
    news: state.addNews,
    user: state.user,
    category: state.listCategory,
  };
};

export default connect(mapStateToProps, { getCategory, createCourse })(CoursesAdd);
