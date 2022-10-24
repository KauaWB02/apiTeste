require('dotenv/config');

export const dataBase = {
    client: process.env.DB_CLIENT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dbname: process.env.DB_DBNAME,
}