import { useState } from 'react';
import '../Form.css'

import { v4 as uuidv4 } from 'uuid';
const Form = (props) => {
  const {getData} = props
const [name,getName] = useState('')
const [work,getWork] = useState('')
const [salary,getSalary] = useState(0)

const IputName=(event)=>{
getName(event.target.value)
}
const IputWork=(element)=>{
  getWork(element.target.value)
  }
  const IputSalary=(element)=>{
  getSalary(element.target.value)
    }

    const ISummitForm=(element)=>{
      element.preventDefault();
         const newList=
          {id:uuidv4(), name:name, work:work , salary:salary}

         getData(newList);
         getName('');
         getWork('');
         getSalary(0);
    }

    return (
      <div>
        <form onSubmit={ISummitForm}>
            <div className="form-control">
                <label>ชื่อพนักงาน:</label>
                <input type='text' placeholder="กรอกชื่อ!!" onChange={IputName}></input>
            </div>
            <div className="form-control">
                <label>ตำแหน่งงาน:</label>
                <input type='text' placeholder="กรอกตำแหน่ง" onChange={IputWork}></input>
            </div>
            <div className="form-control">
                <label>เงินเดือน:</label>
                <input type='number' placeholder="กรอกเงินเดือน" onChange={IputSalary} value={salary}></input> 
            </div>
            <button type="submit">เพิ่มข้อมูล</button>
        </form>
      </div>
    );
  };
  export default Form;
  