const OrderModel=require("../model/orderModel");

exports.placeOrder=async(req,res)=>{

    try {
        const order=new OrderModel(req.body);
        await order.save();
        res.status(201).json({order:order})
    } catch (error) {
        console.log(error);
        res.status(500).json({mesg:"error placing order"});
    }
};

exports.getOrderById=async(req,res)=>{

    try {
        const order=await OrderModel.findById(req.params.id);
        res.status(200).json(order);

    } catch (error) {
        console.log(error);
        res.status(500).json({mesg:"error finding order by Id"});
    }
};

exports.updateOrderStatus=async(req,res)=>{

    try {
        await OrderModel.findByIdAndUpdate(req.params.id,{status:req.body.status});
        res.status(204).json({mesg:"Order status updated"});
    } catch (error) {
        console.log(error);
        res.status(500).json({mesg:"error updateing order status"}); 
    }
};

