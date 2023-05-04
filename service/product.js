const productRepository = require('../repository/product.js')
const productValidation = require('./validations/productValidation.js')

exports.getAll = async () => {
    return await productRepository.getAll();
}

exports.getById = async (id) => {
    product = await productRepository.getById(id)

    try {
        await productValidation.isExist(product)
    } catch (error) {
        throw error
    }

    return product
}

exports.create = async (product) => {
    try {
        await productValidation.insertValidations(productRepository, product.product_id)
    } catch (error) {
        throw error
    }

    let result = await productRepository.create(product)
    product._id = result.insertedId;

    return product
}

exports.update = async (id, product) => {
    try {
        product.product_id = id
        let updated = await productRepository.update(id, product)
        await productValidation.isExist(updated.value)
    } catch (error) {
        throw error
    }

    return true;
}

exports.delete = async (id) => {
    try {
        let deleted = await productRepository.delete(id)
        await productValidation.isExist(deleted.value)
    } catch (error) {
        throw error
    }
    return true
} 