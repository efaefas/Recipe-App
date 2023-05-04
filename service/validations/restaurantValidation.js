exports.insertValidations = async (repository, restaurantId) => {
    var restaurantAlreadyExists = await checkIfAnyRestaurantWithSameRestaurantId(repository, restaurantId)
    if (restaurantAlreadyExists == true) {
        let error = new Error(`Restaurant already exists`)
        error.name = "RestaurantAlreadyExists"
        error.statusCode = 400
        error.isBusinessException = true
        throw error
    }
}

exports.isExist = async (restaurant) => {
    if (!restaurant) {
        let error = new Error(`Restaurant not found`)
        error.name = "RestaurantNotFound"
        error.statusCode = 404
        error.isBusinessException = true
        throw error
    }
}

checkIfAnyRestaurantWithSameRestaurantId = async (repository, restaurantId) => {
    var restaurants = await repository.getAllById(restaurantId)
    return restaurants?.length >= 1 ? true : false
}