const express = require("express");


const qs = require("querystring");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require('axios');
const app = express();

const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
}

app.use(cors(corsOpts));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env["PORT"] || 4000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/getPincode", (req, res) => {

    try {
        var config = {
            method: 'get',
            url: `https://api.postalpincode.in/pincode/${req.body.pincode}`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                res.send(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

        // const response =  axios.get(`);

    } catch (error) {
        console.error(error);
    }


    // Route for making payment
});

app.listen(PORT, () => {
    console.log(`App is listening on Port ${PORT}`);
});

