'user strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const corsConfig = {
    origin: "*",
    credential: true,
    methods: ["GET", "POST", "OPTIONS"],
}
app.options("", cors(corsConfig))
app.use(cors(corsConfig));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3001;

const routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log('server starting');
});