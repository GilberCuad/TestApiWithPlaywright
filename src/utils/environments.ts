import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  API_URL: process.env.API_URL ?? (() => { throw new Error("API_UR is not defined in .env") })(),
  LOGIN_EMAIL: process.env.LOGIN_EMAIL ?? (() => { throw new Error("LOGIN_EMAIL is not defined in .env") })(),
  LOGIN_PASSWORD: process.env.LOGIN_PASSWORD ?? (() => { throw new Error("LOGIN_PASSWORD is not defined in .env") })(),
}