const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    itemname: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    quantity: {
      type: mongoose.SchemaTypes.Number,
      required: true,
      default: 0,
    },
    price: {
      type: mongoose.SchemaTypes.Decimal128,
      required: true,
    },
  },
  { versionKey: false }
);

ItemSchema.pre("save", function (next) {
  if (this.price != null) {
    const priceString = parseFloat(this.price.toString()).toFixed(2);
    this.price = mongoose.Types.Decimal128.fromString(priceString);
  }
  next();
});

ItemSchema.set("toObject", {
  transform: function (doc, ret) {
    if (ret.price) {
      ret.price = ret.price.toString();
    }
  },
});

module.exports = mongoose.model("items", ItemSchema);
