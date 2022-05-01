import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { viewSingleUser, usersGet, deleteUser } from '../../../../../action';
import { connect } from 'react-redux';

const Datatable = (props) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm('Delete this user?')) {
      props.deleteUser(id);
      props.usersGet();

    }


  };
  console.log(props);

  const view = (user) => {
    props.viewSingleUser(user);
    navigate(`/admin/users/view`);
  };

  // const filter = () => {
  //   const result = props.list.filter(i => i.role === ' USER ');
  //   setData(result);
  // };

  useEffect(() => {
    props.usersGet();
    // filter();
  }, []);

  const actionColumn = [{
    field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
      return (<div className="cellAction">

        <div className="viewButton" onClick={() => view(params.row)}>View</div>

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
      Add New User
      <Link to="/admin/users/new" className="link">
        Add New
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
    list: state.getUser,
    delete: state.deleteUser,
  };
};

export default connect(mapStateToProps, { viewSingleUser, usersGet, deleteUser })(Datatable);
