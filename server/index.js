const express = require ("express");
const cors = require ("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, ()=>{
    console.log("Server is starting on port 5000")
})