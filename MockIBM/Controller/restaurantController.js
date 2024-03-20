
const RestaurantModel=require("../model/restaurantModel");

exports.addRestaurant=async(req,res)=>{

     try {
        const restaurant=new RestaurantModel(req.body);
        await restaurant.save();
        res.status(201).json({mesg:"Added Restaruant successfully"});
     } catch (error) {
        console.log(error);
        res.status(500).json({mesg:"Error adding restaurant"});
     }
};

exports.getAllRestaurant=async(req,res)=>{

    try {
        const restaurants=await RestaurantModel.find();
        res.status(200).json(restaurants);
    } catch (error) {
       console.log(error);
       res.status(500).json({mesg:"Error fetching all restaurant"}); 
    }
};

exports.getRestaurantById=async(req,res)=>{

    try {
        const restaurant=await RestaurantModel.findById(req.params.id);
        res.status(200).json({Restaurant:restaurant});

    } catch (error) {
       console.log(error);
        res.status(500).json({mesg:"Error fetching restaurant by Id"}); 
    }
};

exports.getRestaurantMenuById=async(req,res)=>{

    try {
        const restaurant=await RestaurantModel.findById(req.params.id);
        res.status(200).json({Restaurant:restaurant});

    } catch (error) {
        console.log(error);
        res.status(500).json({mesg:"Error fetching restaurant by Id"}); 
    }
}

exports.addMenu=async(req,res)=>{

    try {
        const restaurant=await RestaurantModel.findById(req.params.id);
        restaurant.menu.push(req.body);
        await restaurant.save();
        res.status(201).json({Restaurant:restaurant});
    } catch (error) {
        console.log(error);
        res.status(500).json({mesg:"Error Adding item to menu"});
    }
}

exports.deleteMenuItem=async(req,res)=>{

    try {
        await RestaurantModel.findByIdAndUpdate(req.params.id,{$pull:{_id:req.params.itemId}});
        res.status(202).json({Restaurant:restaurant});
    } catch (error) {
        console.log(error);
        res.status(500).json({mesg:"Error Deleteing item from menu"});
    }
}
