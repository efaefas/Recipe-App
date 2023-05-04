const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  borough: { type: String, required: true },
  cuisine: { type: String, required: true },
  address: {
    building: { type: String },
    street: { type: String },
    zipcode: { type: String },
    coord: [{ type: Number }]
  },
  grades: [{
    date: { type: Date },
    grade: { type: String },
    score: { type: Number }
  }],
  restaurant_id: { type: String, required: true }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
