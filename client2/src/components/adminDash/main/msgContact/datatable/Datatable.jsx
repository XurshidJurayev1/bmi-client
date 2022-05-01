import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getContactList, selectContactItem } from '../../../../../action';

const Datatable = (props) => {
  const [iteration, setIteration] = useState([]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  // const func = () => {
  //   data.map(i => setIteration([...iteration, { id: i._id, email: i.email, text: i.text, name: i.name }]));
  // };

  useEffect(() => {
    props.getContactList();
    // func();
  }, []);


  const itemSelect = (params) => {
    console.log(params);
    props.selectContactItem(params.row);
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/msgContact/:id" style={{ textDecoration: 'none' }}>
              <div className="viewButton" onClick={itemSelect(params)}>View</div>
            </Link>
            {/*<div*/}
            {/*  className="deleteButton"*/}
            {/*  onClick={() => handleDelete(params.row.id)}*/}
            {/*>*/}
            {/*  Delete*/}
            {/*</div>*/}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={props.list}
        getRowId={(row) => row._id}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.listContact,
  };
};

export default connect(mapStateToProps, { getContactList, selectContactItem })(Datatable);
