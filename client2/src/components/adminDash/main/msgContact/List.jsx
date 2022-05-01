import {useState, useEffect} from 'react'
import './list.scss';
import Datatable from './datatable/Datatable';

const MsgContactList = (props) => {
  const [dataRows, setDataRows] =  useState([])

  useEffect(()=>{

  }, [])



  return (
    <>
      <Datatable />
    </>
  );
};

export default MsgContactList;