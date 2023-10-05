const express = require("express")
const app = express();
const path = require("path")

app.listen(3030,()=>{
    console.log("servicio ubicado en el puerto 3030");
})

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"));
});
app.use(express.static("public"));




// app.post()
// app.put()
// app.patch()
// app.delete()