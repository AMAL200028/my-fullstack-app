const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.use('./api/auth', authRoutes);


const PORT = process.env.PORT || 5000;


mongoose
.connect("mongodb+srv://amalcruzewaine:FOUfv6vmcnuIdmtk@cluster0.8ckv5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true,
    UseUnifiedTopology: true,
})
.then(()=> app.listen(PORT, () => console.log('Server running on port ${PORT}')))
.catch((err) => console.log(err));
