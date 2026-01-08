import pool from "../config/db.js";

export const createUser = async (email, hashedPassword,name) => {
  const result = await pool.query(
    "INSERT INTO users (email, password,name) VALUES ($1, $2,$3) RETURNING id, email,name",
    [email, hashedPassword,name]
  );
  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0];
};
