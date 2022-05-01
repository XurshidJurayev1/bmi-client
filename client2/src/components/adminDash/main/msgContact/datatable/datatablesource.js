export const userColumns = [{ field: 'id', headerName: 'ID', width: 230 }, {
  field: 'First name', headerName: 'First name', width: 230, // renderCell: (params) => {
  //   return (
  //     <div className="cellWithImg">
  //       <img className="cellImg" src={params.row.img} alt="avatar" />
  //       {params.row.username}
  //     </div>
  //   );
  // },
}, // {
  //   field: 'Last name',
  //   headerName: 'Last name',
  //   width: 230,
  // },

  {
    field: 'email', headerName: 'email', width: 230,
  }, {
    field: 'text', headerName: 'text', width: 230,
  }, // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

//temporary data
export const userRows = [{
  id: 1,
  username: 'Snow', // img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  status: 'active',
  email: '1snow@gmail.com',
  age: 35,
},

];
