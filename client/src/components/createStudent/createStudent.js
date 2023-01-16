import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();
  const [student,setStudent] = useState({
    regNo : 0,
    studentName:"",
    grade:"",
    section:""
});
const createStudent = () =>{
    axios.post('http://localhost:5000/students',student)
    .then( ()=>{
        window.location.reload(false);
    } )
    .catch()
}
  return (
      <>
        <h2>Create Student</h2>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Registraion Number" variant="outlined" value={student.regNo} onChange={e=>setStudent( prevStudent => ( { ...prevStudent,regNo:e.target.value } ))} />

            <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName}  onChange={e=>setStudent( prevStudent => ( { ...prevStudent,studentName:e.target.value } ))}/>
            
            <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={e=>setStudent( prevStudent => ({ ...prevStudent,grade:e.target.value } ))}/>
            
            <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={e=>setStudent( prevStudent => ( { ...prevStudent,section:e.target.value } ))}/>
            
            <Button variant="contained" color="primary" onClick={createStudent}>Create</Button>
        </form>
    </>
  );
}
