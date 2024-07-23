const express=require("express");
const subscriberRoutes=require("./routes/subscribers");
const  cors=require("cors");
const swaggerDocs=require("./swagger");
const app=express();

app.use(
    cors({
        origin:"*",
        credentials:true
    })
)

app.use(express.json());

swaggerDocs(app);

app.use('/subscribers',subscriberRoutes);
module.exports = app;

// Your code goes here





















module.exports = app;
