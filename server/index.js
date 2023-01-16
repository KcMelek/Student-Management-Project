import express from 'express';
import bodyParser from 'body-parser';
//functionalities of bodyParser are now integrated in express
import cors from 'cors';
import mongoose from 'mongoose';
import studentRoutes from './routes/student.js';

const app = express();

app.use(express.json({
  limit: "20mb",
  extended: true
})); //for JSON files
app.use(express.urlencoded({
  limit: "20mb",
  extended: true
})); //for Form data

app.use(cors());

app.use('/students', studentRoutes);


const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.7hfqzzy.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000; //process.env.PORT is filled when deployed on servers like Heroku


//connecting to the cloud Database
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    //once connection established then sever begins listening
    app.listen(PORT, () => {
      console.log('Connection established and server running on port: ', PORT);
    })
  }).catch(err => {
    console.log(err.message);
  })

mongoose.set('useFindAndModify', false);