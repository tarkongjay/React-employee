import '../Table.css'
import Data from './Data';

const Table= (props) => {
    const {data1}= props
    return (
      <div>
  {data1.map((element)=>{
    return <Data name={element.name } work={element.work} salary={element.salary} key={element.id}/>
  })}

      </div>
    );
  };
  export default Table;
  