import dotenv from 'dotenv';
dotenv.config();


export const api = {
  baseURL: process.env.NODE_ENV==='production' ? 'http://avikchoudhury.com' : 'http://localhost:4000',
}