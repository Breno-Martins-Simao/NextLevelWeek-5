//Dependences
import express from "express"
import bodyParser from "body-parser"
//Static Config
const port = 3333

//Instacing Express
const app = express()
app.use(bodyParser.json())

//Routes
app.get('/', (req, res)=>{
    return res.json({
        obj:"1",
        obj2:"2"
    })
})

app.post('/', (req, res) => {   
    return res.json({"request":req.params})
})

//Starting 
app.listen(port, () => console.log(`Server running on port ${port}`))