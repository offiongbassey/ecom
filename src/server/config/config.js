require('dotenv').config();

const { DB_USER, DB_PASS, DB_NAME, DB_TYPE } = process.env;


module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": "127.0.0.1",
    "dialect": DB_TYPE
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": "127.0.0.1",
    "dialect": DB_TYPE
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": "127.0.0.1",
    "dialect": DB_TYPE
  }
}
