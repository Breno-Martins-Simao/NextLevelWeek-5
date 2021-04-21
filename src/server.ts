//Dependences
import express from "express"
import bodyParser from "body-parser"
//DB dependences
import "./database";
import {routes} from "./routes"
//Static Config
const port = 3333

//Instacing Express
const app = express()
app.use(express.json())

//routes
app.use(routes)

//Starting 
app.listen(port, () => console.log(`Server running on port ${port}`))