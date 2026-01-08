import pool from "../config/db.js";
import { findUserByEmail } from "./user.models.js";



export const findByOriginalUrl = async(original_url,user_id)=>{
    const result =await pool.query(
        `SELECT * FROM urls WHERE original_url =$1 and user_id = $2`,
        [original_url,user_id]
    );
    return result.rows[0];
};

export const createUrl=async (originalUrl,shortCode,user_id)=>{
    // var nextId = findMaxId + 1;
    // const now = new Date();
    // const formattedTime = now.toLocaleTimeString();
    
    const result = await pool.query(
       ` INSERT INTO urls (original_url,short_code,user_id,created_at)
        VALUES ($1,$2,$3,current_timestamp) 
        RETURNING *`,
        [originalUrl,shortCode,user_id]   
    );
    return result.rows[0];
};

export const findByShortCode = async(shortCode)=>{
    const result =await pool.query(
        `SELECT * FROM urls WHERE short_code =$1`,
        [shortCode]
    );
    return result.rows[0];
};
export const findUrlsByUser = async(user_id)=>{
    const result =await pool.query(
        `SELECT coalesce(users.name,users.email) as email,urls.original_url,urls.short_code,urls.created_at,urls.clicks FROM urls INNER JOIN users on urls.user_id = users.id where urls.user_id = $1
        ORDER BY urls.created_at DESC`,
        [user_id]
    );
    return result.rows;
};



export const incrementClicks = async (shortCode)=>{
    await pool.query(
        `UPDATE urls SET clicks =clicks +1 WHERE short_code =$1`,
        // `SELECT * FROM urls WHERE short_code =$1`,
        [shortCode]
    );
};

export const delete_Url=async(shortCode)=>{
        await pool.query(
            `DELETE FROM urls where short_code=$1`,
            [shortCode]
        );
};


