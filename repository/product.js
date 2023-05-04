const { getDb } = require('./config/mongodb');


exports.getAll = async () => (await getDb().collection('products').find().toArray())
exports.getById = async (id) => getDb().collection('products').findOne({ _id: id });
exports.getAllById = async (id) => getDb().collection('products').find({ _id: id }).toArray();
exports.create = async (product) => getDb().collection('products').insertOne(product);
exports.update = async (id, product) => getDb().collection('products').findOneAndUpdate(
    { _id: id },
    { $set: product },
    { returnOriginal: false }
);
exports.delete = async (id) => getDb().collection('products').findOneAndDelete({ _id: id });