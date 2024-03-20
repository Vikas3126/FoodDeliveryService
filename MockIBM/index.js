const express=require("express");
const userRoutes=require("./Routes/userRoutes");
const restaurantRoutes=require("./Routes/restaurantRoutes");
const orderRoutes=require("./Routes/orderRoutes");
const connection=require("./db");

const app=express();

app.use(express.json());

app.use("/api/users",userRoutes);
app.use("/api/restaurants",restaurantRoutes);
app.use("/api/orders",orderRoutes);

app.listen(8800,async()=>{

    try {
        await connection
        console.log("connected to DB");
        console.log("server is running at port 8800");
    } catch (error) {
        console.log(error);
    }
})