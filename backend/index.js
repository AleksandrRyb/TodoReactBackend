require('dotenv').config({ path: 'variables.env' });
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Connect to DB
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
.then(() => console.log('Database is connected'))
.catch(err => console.log(err))

//Routes
app.use('/api/tasks', taskRoutes);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))