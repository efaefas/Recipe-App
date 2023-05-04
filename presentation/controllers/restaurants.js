const restaurantService = require('../../service/restaurant.js')

exports.getAll = async (req, res) => {
  try {
    const restaurants = await restaurantService.getAll();
    res.status(200).json(restaurants);
  } catch (err) {
    console.error(err);

    if (err.isBusinessException == false) {
      err.statusCode = 500
      err.message = 'Server Error'
    }

    res.status(err.statusCode).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const restaurant = await restaurantService.getById(req.params.id);

    res.status(200).json(restaurant);
  } catch (err) {
    console.error(err);

    if (err.isBusinessException == false) {
      err.statusCode = 500
      err.message = 'Server Error'
    }

    res.status(err.statusCode).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newRestaurant = req.body;
    const inserted = await restaurantService.create(newRestaurant);
    res.status(201).json(inserted);
  } catch (err) {
    console.error(err);

    if (err.isBusinessException == false) {
      err.statusCode = 500
      err.message = 'Server Error'
    }

    res.status(err.statusCode).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedRestaurant = await restaurantService.update(req.params.id, req.body)
    res.status(200).json(updatedRestaurant.value);
  } catch (err) {
    console.error(err);

    if (err.isBusinessException == false) {
      err.statusCode = 500
      err.message = 'Server Error'
    }

    res.status(err.statusCode).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await restaurantService.delete(req.params.id)
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (err) {
    console.error(err);

    if (err.isBusinessException == false) {
      err.statusCode = 500
      err.message = 'Server Error'
    }

    res.status(err.statusCode).json({ message: err.message });
  }
};


/** 
 * Model tanimladik fakat bu modelin disina cikmak, modelde tanimli olmayan attribute'lari vermek ve
 * db'ye eklemek mumkun. Modelde tanimli olmayan alanlari kullanmak istedigimizde toObject() diyerek
 * plain JavaScript objesini elde ederiz, modelde tanimli olmayan attribute'larina da . diyerek ulasabiliriz.
 * 
 * Ornek:
 * 
 * const restaurant = new Restaurant({
  name: 'Pizza Place',
  location: {
    address: '123 Main St',
    city: 'San Francisco',
    state: 'CA'
  },
  rating: 4.5,
  tags: ['pizza', 'Italian', 'delivery'],
  deliveryTime: 45 // this field is not in the model
});

restaurant.save();

console.log(restaurant.toObject().deliveryTime); // outputs 45
 * 
 *  */

