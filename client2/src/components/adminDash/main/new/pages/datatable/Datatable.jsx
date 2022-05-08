import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteNews, listNews } from '../../../../../../action';


const Datatable = (props) => {

  const handleDelete = (id) => {
    console.log(id);

    props.deleteNews(id);
    props.listNews();
    console.log(props);
  };


  useEffect(() => {
    props.listNews();
  }, []);

  const actionColumn = [{
    field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
      return (<div className="cellAction">
        <Link to={`/admin/news/${params.row._id}`} style={{ textDecoration: 'none' }}>
          <div className="viewButton" >View</div>
        </Link>
        <div
          className="deleteButton"
          onClick={() => handleDelete(params.row._id)}
        >
          Delete
        </div>
      </div>);
    },
  }];
  return (<div className="datatable">
    <div className="datatableTitle">
      Add New News
      <Link to="/admin/news/new" className="link">
        Add News
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      getRowId={(row) => row._id}
      rows={props.list}
      columns={userColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
    />
  </div>);
};

const mapStateToProps = (state) => {
  return {
    list: state.listNews, delete: state.deleteNews,
  };
};

export default connect(mapStateToProps, { listNews, deleteNews })(Datatable);
