import mysql from "mysql";
import "dotenv/config";
import { promisify } from "util";

const { HOST, USER, DB, PW } = process.env;
const pool = mysql.createPool({
  host: HOST,
  user: USER,

  database: DB,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has to many connections");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused");
    }
  }

  if (connection) connection.release();
  console.log("DB is Connected");

  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

export default pool;
