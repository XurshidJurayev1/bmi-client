import React, { useEffect, useState } from 'react';
import './News.scss';
import Json from '../../FakeApi/json';
import { ImageApi } from '../../../Api/ImageApi';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { listNews, viewNews } from '../../../action';
import { useNavigate } from 'react-router-dom';

const News = (props) => {
  const navigate = useNavigate();

  const render = () => {
    props.listNews();
  };

  useEffect(() => {
    render();
  }, []);
  console.log(props);

  const [pageNumber, setPageNumber] = useState(0);

  const listPerPage = 8;
  const pagesVisited = pageNumber * listPerPage;


  const navigateSingle = (item) => {
    props.viewNews(item);
    navigate(`/news/${item._id}`);
  };

  const diplayList = props.list
    .slice(pagesVisited, pagesVisited + listPerPage)
    .map((item, idx) => {


      return (
        <div className="col-md-3 col-sm-6" key={idx}>
          <div className="blog__card">
            <div className="blog__img">
              <img src={`${ImageApi}${item.image_path}`} alt="png" />
            </div>
            <div className="blog__text">
              <h3>{item.title}</h3>

              <button className="btn btn-success" onClick={() => navigateSingle(item)}>More</button>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(props.list.length / listPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="news">
      <h2>News</h2>
      <div className="container-fluid">
        <div className="row">


          {
            props.list ? diplayList : <h1 className="text-center"> Nothing </h1>
          }


        </div>
        <nav aria-label="...">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            renderOnZeroPageCount={null}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'page-item active'}
            activeLinkClassName={'page-link'}
          />


        </nav>
      </div>
    </div>
  );
};
const mapStataToProps = (state) => {
  return {
    list: state.listNews,
  };
};


export default connect(mapStataToProps, {
  listNews,
  viewNews,
})(News);