const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: [{text:'Are you ofigel? Dudosit tut', text_order: 1}],
    standardHeaders: true, 
    legacyHeaders: false,
});

const CONFIG = {
    db_access: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    }
}

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(limiter);

const port = process.env.NODE_PORT;

async function queryData(sqlQuery){
    const con = await mysql.createConnection(CONFIG.db_access);
    const [res, ] = await con.execute(sqlQuery);

    return res;
}

app.get('/api/getDialog', async (req, res) => {
    if(req.headers["x-api-key"] === API_KEY){
        const dialogID = req.query.dialogID;

        if(dialogID){
            try{
                const response = await queryData(`SELECT text, text_order FROM Texts WHERE dialog_id = ${dialogID} ;`);
                response.length > 0 
                    ? res.json(response) 
                    : res.status(404).send({ message: 'Dialog Id not found'});
            } catch(e){
                res.status(500).send({
                    message: 'error',
                    error: e
                });
            }
        }else{
            res.status(400).send({
                message: 'dialog id in undefined'
            })
        }
    }else{
        res.send('Access denied, loh!');
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})