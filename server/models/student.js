import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        dafault: 'A'
    },
});

const student = mongoose.model('student', studentSchema);
export default student; //exporting created model