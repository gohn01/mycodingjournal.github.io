// import React from 'react'
// import React, { useState, useEffect} from 'react'
// import { Container } from 'reactstrap';
// import Form from './Form'

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// function TableList() {
//     const [DateID, setDateID] = useState(Date.now());
//     const [OutputList, setOutputList] = useState("");
  


//     const HandleOutputList = (event) =>{
//         console.log(event.target.value);
//         setOutputList(event.target.value);

//     }

//     const OutputInfo = {DateID, OutputList};
//     setOutputInfos([...DateID, OutputList]);
    
//     useEffect (()=> {
//       localStorage.setItem('OutputInfo', JSON.stringify(OutputInfos))
//     },[OutputInfos]);

//     return (
//     <TableContainer component={Paper}>
//       <Form DateID={DateID} HandleDateID={HandleDateID} OutputList={OutputList} HandleOutputList={HandleOutputList} HandleSubmitForm={HandleSubmitForm}/>
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//       <TableHead>
//         <TableRow>
//           <TableCell>Thoughts for the Day</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow
//             key={row.OutputList}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//           >
//             <TableCell component="th" scope="row">
//               {row.OutputList}
//             </TableCell>
//             <TableCell align="right">{row.OutputList}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// );
// }
    
//   )
// }

// export default TableList