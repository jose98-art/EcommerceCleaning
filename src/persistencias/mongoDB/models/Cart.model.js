import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productList: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
      },
      quantity: Number
     
    },
  ],
});

cartSchema.pre("find",function(next){
  this.populate("productList.productId")
  next()
})

export const cartsModel = mongoose.model("carts", cartSchema);
