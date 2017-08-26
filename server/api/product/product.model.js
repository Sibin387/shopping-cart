'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  active: { type: Boolean, default: true },
  quantity:  { type: Number, default: 1 },
  description: String,
  image: String,
  category: String
});

export default mongoose.model('Product', ProductSchema);
