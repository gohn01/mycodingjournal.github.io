import React,{useEffect,useState} from 'react'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button';


import Input from '@mui/material/Input';

let retrieveData = localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")) : [];
// let currentDate = new Date();
// let day = currentDate.getDate();
// let month = currentDate.getMonth() + 1;
// let year = currentDate.getFullYear();

// let dateNow = ` ${month}/${day}/${year}`;

function Task() {

    const [isChecked, setIsChecked] = useState(false);

    const [Tasks, setTasks] = useState([retrieveData]);
    // const [ID, setID] = useState(Date.now());
    const [editingTask, setEditingTask] = useState(null);
    // let [allData,setAllData] = useState([retrieveData]);
    const [inputTask, setInputTask] = useState("");
    const [inputDate, setInputDate] = useState("");

    const handleEdit = (index) => {
        setEditingTask(index);
        setInputTask(Task[index]);
    };

    const handleDelete = (index) => {
      setTasks([...Tasks.slice(0, index), ...Tasks.slice(index + 1)]);
      
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (editingTask !== null) {
        setTasks([...Tasks.slice(0, editingTask),inputTask,...Tasks.slice(editingTask + 1),]);
        setEditingTask(null);
      } else {
        setTasks([... Tasks, inputTask]);
      }
      setInputTask("");
    };

    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
      setTasks(storedTasks);
    }, []);

    useEffect(() => {
      localStorage.setItem("Tasks", JSON.stringify(Tasks));
    },[Tasks]);

    // useEffect(()=>{
    //  localStorage.setItem("OutputData",JSON.stringify(allData))
    // },[allData])
    
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      if (!isChecked) {
        document.getElementById('bground').style.backgroundColor = "green";

    } else {
      document.getElementById('bground').style.backgroundColor = "white";


    }
    };
  return (
    <div>
        <form style={{border:"1px solid black", padding:"10px", margin:"20px", textAlign:"center", maxWidth:"400px"}} onSubmit={handleSubmit}>
            <div>
                <h4>Task</h4>
                <label for="">Date: </label>
                <Input type="text" name='output' id='output' value={inputDate} onChange={(e) => setInputDate(e.target.value)}/><br/>
            </div>
            <Input type="text" name='output' id='output'  value={inputTask} onChange={(e) => setInputTask(e.target.value)} /><br/>
            <Button type="submit" style={{backgroundColor:"blue", color:"white" , fontWeight:"bold", margin:"10px"}}>Save</Button>
        </form>

        {/* <h1>Task</h1>
        <ul className={{isChecked}}>
        {Tasks.map((Task, index) => (
          <li key={Task} style={{listStyle:'none'}}>
            <input type='checkbox' name='checkbox' id='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
            <p>{Task}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul> */}
    

      <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell style={{fontSize:"2rem" ,textAlign:"center",backgroundColor:"skyblue"}}>Task</TableCell>
          </TableRow>
        </TableHead>
        <TableBody id="bground">
          {Tasks.map((Task, index) => (
            <TableRow key={Task} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <input type='checkbox' name='checkbox' id='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
              </TableCell>
              <TableCell >
        
              </TableCell>
              <TableCell component="th" scope="row">
                {Task}
              </TableCell>
              <TableCell id="bground">
                <Button type="submit" style={{backgroundColor:"gray", color:"white" , fontWeight:"bold", margin:"10px"}} onClick={() => handleEdit(index)}>Edit</Button>
                <Button type="submit" style={{backgroundColor:"red", color:"white" , fontWeight:"bold", margin:"10px"}} onClick={() => handleDelete(index)}>Delete</Button>
              </TableCell>
              
              <TableCell>
              
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default Task
