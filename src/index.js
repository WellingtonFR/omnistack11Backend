const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

app.post('/', (req, res) => {
    res.send('hello world')
});

app.listen(3001);