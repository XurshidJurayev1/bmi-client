import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./datatablesource"; 
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {viewSingleUser} from '../../../../../../../action'
import { connect } from "react-redux";

const Datatable = (props) => {
  const navigate = useNavigate()
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const view = (user) => {
    console.log(user + '13212')
    props.viewSingleUser(user)
    navigate(`/admin/users/${user.id}`)
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
              <div className="viewButton"  onClick={()=>view(params.row)}>View</div>
            
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/admin/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return{}
}

export default connect(mapStateToProps, {viewSingleUser})(Datatable);
