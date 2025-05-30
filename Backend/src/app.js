const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
app.use(cors());


app.use(express.json());

const aiRoutes = require('./routes/ai.route');





app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/ai', aiRoutes);


module.exports = app