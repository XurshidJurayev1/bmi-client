import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteCourse, getCourses, selectCourse, usersGet } from '../../../../../action';


const Datatable = (props) => {

  const handleDelete = (id) => {
    props.deleteCourse(id);
    render();
  };

  const render = () => {
    props.usersGet();
    props.getCourses();
  };
  console.log(props);

  useEffect(() => {
    render();
  }, []);


  const actionColumn = [{
    field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
      return (<div className="cellAction">
        <Link to={`/admin/courses/view/${params.row._id}`} style={{ textDecoration: 'none' }}>
          <div className="viewButton" onClick={() => props.selectCourse(params.row)}>View</div>
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
  const owner = [{
    field: 'owner', headerName: 'Owner', width: 200, renderCell: (params) => {
      const owner = props.users.filter(i => i._id === params.row.owner);
      return (<div className="cellAction">
        <h6>{owner[0].first_name} {owner[0].last_name}</h6>
      </div>);
    },
  }];
  return (<div className="datatable">
    <div className="datatableTitle">
      Add New Course
      <Link to="/admin/courses/new" className="link">
        Add
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      getRowId={(row) => row._id}
      rows={props.list}
      columns={userColumns.concat(owner, actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
    />
  </div>);
};

const mapStateToProps = (state) => {
  return {
    list: state.getCourses, delete: state.deleteNews,
    users: state.getUser,
    user: state.user,
  };
};

export default connect(mapStateToProps, { getCourses, deleteCourse, selectCourse, usersGet })(Datatable);
