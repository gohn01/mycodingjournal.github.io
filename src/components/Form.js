import React,{useEffect,useState} from 'react'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'



import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import ButtonGroup from '@mui/material/ButtonGroup';

import Task from './Task';
import { textAlign } from '@mui/system';

let retrieveData = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

let dateNow = ` ${month}/${day}/${year}`;

function Form() {

    const [isChecked, setIsChecked] = useState(false);

    const [todos, setTodos] = useState([retrieveData]);
    const [ID, setID] = useState(Date.now());
    const [editingTodo, setEditingTodo] = useState(null);
    // let [allData,setAllData] = useState([retrieveData]);
    const [inputValue, setInputValue] = useState("");

    const handleEdit = (index) => {

      setEditingTodo(index);
      setInputValue(todos[index]);
    };

    const handleDelete = (index) => {
      setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (editingTodo !== null) {
        setTodos([...todos.slice(0, editingTodo),inputValue,...todos.slice(editingTodo + 1),]);
        setEditingTodo(null);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue("");
    };

    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(storedTodos);
    }, []);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // useEffect(()=>{
    //  localStorage.setItem("OutputData",JSON.stringify(allData))
    // },[allData])
    
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      if (!isChecked) {
        document.getElementById('bg').style.backgroundColor = "green";
    } else {
      document.getElementById('bg').style.backgroundColor = "white";

    }
    };
  return (
    <div>
        <form style={{border:"1px solid black", padding:"10px", margin:"20px", textAlign:"center", maxWidth:"400px"}} onSubmit={handleSubmit}>
            <div>
                <h4>Thoughts for the Day</h4>
                <label for="">Date: {dateNow}</label>
                
            </div>
            <Input type="text" name='output' id='output'  value={inputValue} onChange={(e) => setInputValue(e.target.value)} /><br/>
            <Button type="submit" style={{backgroundColor:"blue", color:"white" , fontWeight:"bold", margin:"10px"}} >Save</Button>
        </form>

        {/* <h1>Thoughts for the Day</h1>
        <ul className={{isChecked}}>
        {todos.map((todo, index) => (
          <li key={todo} style={{listStyle:'none'}}>
            <input type='checkbox' name='checkbox' id='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
            <p>Date: {dateNow}</p>
            <p>{todo}</p>
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
            <TableCell style={{fontSize:"2rem" ,textAlign:"center",backgroundColor:"skyblue"}}>Thoughts for the Day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody id="bg">
          {todos.map((todo, index) => (
            <TableRow key={todo} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <input type='checkbox' name='checkbox' id='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
              </TableCell>
              <TableCell >
                <p>Date: {dateNow}</p>
              </TableCell>
              <TableCell component="th" scope="row">
                {todo}
              </TableCell>
              <TableCell id="bg">
                <Button style={{backgroundColor:"gray", color:"white" , fontWeight:"bold", margin:"10px"}} onClick={() => handleEdit(index)}>Edit</Button>
                <Button style={{backgroundColor:"red", color:"white" , fontWeight:"bold", margin:"10px"}} onClick={() => handleDelete(index)}>Delete</Button>
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

export default Form
