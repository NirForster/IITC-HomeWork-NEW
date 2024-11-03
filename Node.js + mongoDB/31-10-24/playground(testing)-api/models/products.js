import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["Electronics", "Books", "Clothing"],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Product", productSchema);
