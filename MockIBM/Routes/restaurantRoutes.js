const express=require("express");
const restaurantRouter=express.Router();
const restaurantController=require("../Controller/restaurantController");


restaurantRouter.post("/",restaurantController.addRestaurant);
restaurantRouter.get("/",restaurantController.getAllRestaurant);
restaurantRouter.get("/:id",restaurantController.getRestaurantById);
restaurantRouter.get("/:id/menu",restaurantController.getRestaurantMenuById);
restaurantRouter.post("/:id/menu",restaurantController.addMenu);
restaurantRouter.delete("/:id/menu/:itemId",restaurantController.deleteMenuItem);

module.exports=restaurantRouter;