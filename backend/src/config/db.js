// import pkg from "pg";
// const { Pool } = pkg;
// import dotenv from "dotenv";


// dotenv.config();

// const pool=new Pool({
//     connectionString: process.env.DATABASE_URL,
// });

// export default pool;

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'url',        
  host: 'localhost',
  database: 'url_short',   
  password: '1234', 
  port: 5432,
});

pool.connect()
  .then(() => console.log("Connected successfully"))
  .catch(err => console.error("Connection error", err.stack));

  export default pool;
