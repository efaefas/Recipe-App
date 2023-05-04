const restaurantRepository = require('../repository/restaurant.js')
const restaurantValidation = require('./validations/restaurantValidation.js')

exports.getAll = async () => {
    return await restaurantRepository.getAll();
}

exports.getById = async (id) => {
    restaurant = await restaurantRepository.getById(id)

    try {
        await restaurantValidation.isExist(restaurant)
    } catch (error) {
        throw error
    }

    return restaurant
}

exports.create = async (restaurant) => {
    try {
        await restaurantValidation.insertValidations(restaurantRepository, restaurant.restaurant_id)
    } catch (error) {
        throw error
    }

    let result = await restaurantRepository.create(restaurant)
    restaurant._id = result.insertedId;

    return restaurant
}

exports.update = async (id, restaurant) => {
    try {
        restaurant.restaurant_id = id
        let updated = await restaurantRepository.update(id, restaurant)
        await restaurantValidation.isExist(updated.value)
    } catch (error) {
        throw error
    }

    return true;
}

exports.delete = async (id) => {
    try {
        let deleted = await restaurantRepository.delete(id)
        await restaurantValidation.isExist(deleted.value)
    } catch (error) {
        throw error
    }
    return true
} 