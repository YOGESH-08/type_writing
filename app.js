import express from "express"
import bodyParser from "body-parser"
import path, { dirname } from "path"
import { fileURLToPath } from "url"

const app = express();
const port = 999;

app.use(bodyParser.urlencoded({extended:true}));

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
app.use(express.static(_dirname));

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(_dirname, "index.html"));
});

app.post("/speed",(req,res)=>{
    res.sendFile(path.join(_dirname, "start.html"));
});