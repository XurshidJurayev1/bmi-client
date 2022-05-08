import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteCateg, getCategory, selectCategory } from '../../../../action';


const Datatable = (props) => {

  const handleDelete = (id) => {
    props.deleteCateg(id);
    render();
  };

  const render = () => {
    props.getCategory();
  };


  useEffect(() => {
    render();
  }, []);

  console.log(props);

  const actionColumn = [{
    field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
      // return (<div className="cellAction">
      //   <Link to={`/teacher/category/view/${params.row._id}`} style={{ textDecoration: 'none' }}>
      //     <div className="viewButton" onClick={() => props.selectCategory(params.row)}>View</div>
      //   </Link>
      //   <div
      //     className="deleteButton"
      //     onClick={() => handleDelete(params.row._id)}
      //   >
      //     Delete
      //   </div>
      // </div>);
    },
  }];
  return (<div className="datatable">
    <div className="datatableTitle">
      Add New Category
      <Link to="/teacher/category/new" className="link">
        Add
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
    list: state.listCategory, delete: state.deleteNews,
  };
};

export default connect(mapStateToProps, { getCategory, deleteCateg, selectCategory })(Datatable);
