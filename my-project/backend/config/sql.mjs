import { createClient } from "@libsql/client";
import dotenv from 'dotenv';
dotenv.config();

const databaseURL = process.env.REACT_APP_TURSO_DB_URL;
const authToken = process.env.REACT_APP_TURSO_DB_TOKEN;

const client = createClient({
    url: databaseURL,
    authToken: authToken
});

export default client;