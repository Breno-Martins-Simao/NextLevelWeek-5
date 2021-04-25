//Importing Http
import {http} from './http'

//Import Websocket.ts
import "./websocket/client"
import "./websocket/admin"

//Static Config
const port = 3333

//Starting 
http.listen(port, () => console.log(`Server running on port ${port}`))