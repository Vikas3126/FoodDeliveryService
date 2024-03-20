const express=require("express");
const orderRouter=express.Router();
const orderController=require("../Controller/orderController");


orderRouter.post("/",orderController.placeOrder);
orderRouter.get("/:id",orderController.getOrderById);
orderRouter.put("/:id",orderController.updateOrderStatus);

module.exports=orderRouter