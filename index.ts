import * as express from "express";
import * as fs from "fs"
function main(){
const app = express()
app.get('/', function (req, res) {
    fs.readFile("./index.html",(err, rtta)=>{
      res.send(rtta.toString())
    })
    
  })
   
  app.listen(3000,()=>{console.log("Server on")})
};
main();
