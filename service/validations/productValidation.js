exports.insertValidations = async (repository, productId) => {
    var productAlreadyExists = await checkIfAnyProductWithSameProductId(repository, productId)
    if (productAlreadyExists == true) {
        let error = new Error(`Product already exists`)
        error.name = "ProductAlreadyExists"
        error.statusCode = 400
        error.isBusinessException = true
        throw error
    }
}

exports.isExist = async (product) => {
    if (!product) {
        let error = new Error(`Product not found`)
        error.name = "ProductNotFound"
        error.statusCode = 404
        error.isBusinessException = true
        throw error
    }
}

checkIfAnyProductWithSameProductId = async (repository, productId) => {
    var products = await repository.getAllById(productId)
    return products?.length >= 1 ? true : false
}