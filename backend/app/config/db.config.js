//require pg amin
const Client = require('pg').Pool

const DB_URL='postgres://wknubfzqlbywzn:8c9fda8c747b966a2400824c959ffcb24699a7f74d5aa714d70206072ec455f7@ec2-52-71-23-11.compute-1.amazonaws.com:5432/db0c5qj6998e9d';
//tell it to allow unathorized users on heroku
const client = new Client({connectionString: DB_URL, ssl: {rejectUnauthorized: false}});

module.exports = client;