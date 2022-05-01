import './single.scss';
import { connect } from 'react-redux';


const MsgSingle = (props) => {
  const item = props.item;

  console.log(props);


  return (
    <div className="single">

      <div className="top">
        <div className="left">
          {/*<div className="editButton">Edit</div>*/}
          <h1 className="title">Information</h1>
          <div className="item">
            {/*<img*/}
            {/*  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"*/}
            {/*  alt=""*/}
            {/*  className="itemImg"*/}
            {/*/>*/}
            <div className="details">
              <h1 className="itemTitle">{item.name}{item.last_name}</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">{item.email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Message:</span>
                <span className="itemValue">{item.text}</span>
              </div>
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
    item: state.selectContact,
  };
};

export default connect(mapStateToProps, {})(MsgSingle);
