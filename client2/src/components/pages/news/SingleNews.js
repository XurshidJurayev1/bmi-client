import React, { useEffect } from 'react';
import './SingleNews.scss';
import { connect } from 'react-redux';
import { viewNews } from '../../../action';
import { ImageApi } from '../../../Api/ImageApi';
import { useNavigate } from 'react-router-dom';


const SingleNews = (props) => {
  const navigate = useNavigate();

  function createMarkup(item) {
    return { __html: `${item.content}` };
  }

  console.log(props);
  const item = props.item;
  return (
    <div className="single_news">
      <h2>News</h2>
      <div className="container-fluid">
        <div className="single_news_img">
          <img src={`${ImageApi}${item.image_path}`} />
        </div>
        <h3>{item.title}</h3>
        <a target="_blank" href={item.link} rel="noreferrer">source link</a>
        <div className="create__markup" dangerouslySetInnerHTML={createMarkup(item)} />


        <button className="btn btn-primary" onClick={() => navigate('/news')}>Back</button>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.viewsNews,
  };
};

export default connect(mapStateToProps, { viewNews })(SingleNews);