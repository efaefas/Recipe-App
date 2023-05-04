const { getDb } = require('./config/mongodb');


exports.getAll = async () => (await getDb().collection('restaurants').find().toArray())
exports.getById = async (id) => getDb().collection('restaurants').findOne({ restaurant_id: id });
exports.getAllById = async (id) => getDb().collection('restaurants').find({ restaurant_id: id }).toArray();
exports.create = async (restaurant) => getDb().collection('restaurants').insertOne(restaurant);
exports.update = async (id, restaurant) => getDb().collection('restaurants').findOneAndUpdate(
    { restaurant_id: id },
    { $set: restaurant },
    { returnOriginal: false }
);
exports.delete = async (id) => getDb().collection('restaurants').findOneAndDelete({ restaurant_id: id });