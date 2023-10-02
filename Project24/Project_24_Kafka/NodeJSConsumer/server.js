const express = require('express');
const consumer = require("./myconsumer");
const app = express()

app.use(express.json());
let options = {
    dotfiles: "ignore",
    redirect:false
}

app.use(express.static('public',options))

app.get("/",(req,res)=>{
    var response = `
    <html>
        <h1>Confluence Kafka REST</h1>
        <div>
        <form action="/consumer" method="get" >
            <input type="submit" value="Consume Vehicle Coordinates"/>
        </form>
        </div>
    </html>`
res.send(response)
}
)
app.get("/consumer", (req,res)=>{
    let topic = "vehicle-coordinates"
    response = consumer.myconsumer({topic:topic})
    res.send("Success- Consumed: " +topic);
})


app.listen(5000,()=>console.log('Listening on 5000'))