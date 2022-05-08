import './single.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const CategorySingle = (props) => {


  return (
    <div className="single">

      <div className="top">
        <div className="left">
          <Link to="/admin/category/edit" className="editButton">Edit</Link>
          <h1 className="title">Category</h1>
          <div className="item">
            <div className="details">
              <h1 className="itemTitle">Name: {props.item.name} </h1>
              <div className="detailItem">
                <span className="itemKey">status: </span>
                <span className="itemValue">{props.item.status}</span>
              </div>
              {/*<div className="detailItem">*/}
              {/*  <span className="itemKey">Phone:</span>*/}
              {/*  <span className="itemValue">+1 2345 67 89</span>*/}
              {/*</div>*/}
              {/*<div className="detailItem">*/}
              {/*  <span className="itemKey">Address:</span>*/}
              {/*  <span className="itemValue">*/}
              {/*      Elton St. 234 Garden Yd. NewYork*/}
              {/*    </span>*/}
              {/*</div>*/}
              {/*<div className="detailItem">*/}
              {/*  <span className="itemKey">Country:</span>*/}
              {/*  <span className="itemValue">USA</span>*/}
              {/*</div>*/}
            </div>
          </div>
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

export default connect(mapStateToProps, {})(CategorySingle);
