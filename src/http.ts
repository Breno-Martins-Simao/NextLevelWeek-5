//Dependences
import express, { response } from "express"

//Importing path
import path from "path"

//importing websocket Dependences
import {createServer} from "http"; 
import {Server, Socket} from "socket.io";

//DB dependences
import "./database";
//Importing Routes
import {routes} from "./routes"


//Instacing Express
const app = express()

app.use(express.static(path.join(__dirname,"..", "public")))
app.set("views", path.join(__dirname,"..", "public"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.get("/pages/client", (req, res)=>{
    return res.render("html/client.html")
})

const http = createServer(app)//Creating Protocol HTTP
const io = new Server(http)//Creating Protocol WebSocket (WS)

io.on("connection", (socket:Socket)=>{
    console.log("Se conectou", socket.id)
})

app.use(express.json())

//routes
app.use(routes)

export {http, io}