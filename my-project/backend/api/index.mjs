import cors from 'cors'; // Import the cors middleware
import express, { json } from 'express';
import indexRouter from '../routes/index.route.mjs';


const app = express();
const port = 3000; // Choose a port for your server

app.use(cors());
app.use(json());

//routes
app.use("/", indexRouter)
app.use(("*"), (req, res) => {
    // res.send("404 - Not Found!")
    res.status(404).json({ success: false, message: "404 - Not Found!" });
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));