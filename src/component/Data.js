import '../Table.css'
const Data = (props) => {
  return (
    <div>
     <div className='list'>
         <h1>ชื่อ: <span>{props.name}</span></h1>
         <h1>ตำแหน่ง: <span>{props.work}</span></h1>
         <h1>เงินเดือน: <span>{props.salary}</span></h1>
     </div>
    </div>
  );
};
export default Data;
