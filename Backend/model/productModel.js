const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
  id: Number,
  img: {
    src: String,
    alt: String,
  },
  title: String,
  category: String,
  category2: String,
  category3: String,
  size: String,
  price: Number,
  allimg: [String],
  returnPolicy: Number,
  shipping: String,
  productDetail: {
    productHeading: String,
    wash: String,
    netQuantity: Number,
    clothType: String,
    productCode: Number,
    marketedBy: String,
    manufacturedBy: String,
    countryOrigin: String,
    customerAddress: String,
  },
});
module.exports = mongoose.model("Product", productSchema);
