const express = require('express');
const app = express();

const mongoose = require('mongoose');

const helmet = require('helmet')
const cors = require('cors')
const jwt = require('jsonwebtoken')


const PORT = process.env.PORT || 5000
require('dotenv').config();

// middleware
app.use(helmet());          
app.use(cors());            
app.use(express.json());  

//app.use('/api/user', require('./routes/router'))

const postRouter = require('./routes/posts');
app.use('/posts', verifyToken, postRouter);

const apiUserRouter = require('./routes/apiUsers');
app.use('/api-users', apiUserRouter);

function verifyToken(req, res, next) {
    const bearer = req.headers['authorization'];
    const token = bearer && bearer.split(' ')[1]

    if (!token) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) {
            return res.sendStatus(403);
        }

        next();
    }) 
}
mongoose.set('strictQuery', false);
mongoose.connect(
    
    `mongodb+srv://Jallow32:<w4PDbGxG2z68rImB>@cluster0.zwio0zh.mongodb.net/Cluster0?retryWrites=true&w=majority`,
    {useNewURLParser: true, useUnifiedTopology: true }, 
    () => {
        console.log("DB connected");
    }
    )

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})