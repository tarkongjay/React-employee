import './App.css';
import React, { useState } from 'react';
import Table from './component/Table';
import Form from './component/Form';

function App() {
  const data1=[
    {id: 1,name: 'พชร กองจาย' ,work: 'Front-end Devaloper' ,salary: 30000},
    {id: 2,name: 'ศุภการ ทองมี' ,work: 'Devops Devloper' ,salary: 25000},
  ]
  const [items,newItemData] = useState(data1)
  const OnAddItem=(newItem)=>{
  console.log('ค่าที่ได้จาก FormComponent', newItem)
      newItemData((prev)=>{
           return [newItem,...prev] //วนลูปข้อมูล data1 ให้ newITEM  ขึ้นก่อน data1
      })
  }
  return (
  <React.Fragment>
     <div>
      <h1>เพิ่มข้อมูลพนักงาน</h1>
     </div>
     <Form getData={OnAddItem}/>
     <Table data1={items}/> 
  </React.Fragment>
  );
}

export default App;
