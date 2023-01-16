import express from 'express';
import {
    getStudents,
    createStudent,
    deleteStudent
} from '../controllers/student.js';
import student from '../models/student.js';


const router = express.Router();

router.get('/', getStudents); //index route
router.post('/', createStudent); //create route
router.delete('/:id', deleteStudent); //delete route


export default router;