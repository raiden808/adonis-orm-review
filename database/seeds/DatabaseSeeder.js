'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/**
 * DB Table Models
 */
const Garage = use('App/Models/Garage')
const Driver = use('App/Models/Driver')
const Car = use('App/Models/Car')

class DatabaseSeeder {
  async run () {

    await Factory.model('App/Models/Garage').create()
    const Garage_1 = await Garage.find(1)

    const driver_model_1 = await Factory.model('App/Models/Driver').make()
    const driver_model_2 = await Factory.model('App/Models/Driver').make()
    const driver_model_3 = await Factory.model('App/Models/Driver').make()
    const driver_model_4 = await Factory.model('App/Models/Driver').make()
    const driver_model_5 = await Factory.model('App/Models/Driver').make()

    // Use the Garage_1 model to persist each of the `driver` models we made

    await Garage_1.drivers().save(driver_model_1)
    await Garage_1.drivers().save(driver_model_2)
    await Garage_1.drivers().save(driver_model_3)
    await Garage_1.drivers().save(driver_model_4)
    await Garage_1.drivers().save(driver_model_5)

     // create 5 Driver_* variables and assign the newly created Driver models to them

     const Driver_1 = await Driver.find(1)
     const Driver_2 = await Driver.find(2)
     const Driver_3 = await Driver.find(3)
     const Driver_4 = await Driver.find(4)
     const Driver_5 = await Driver.find(5)

    // use the `make` keyword to make new cars but do not persist them
    const car_model_1 = await Factory.model('App/Models/Car').make()
    const car_model_2 = await Factory.model('App/Models/Car').make()
    const car_model_3 = await Factory.model('App/Models/Car').make()
    const car_model_4 = await Factory.model('App/Models/Car').make()
    const car_model_5 = await Factory.model('App/Models/Car').make()
    // Use the Driver models to persist each of the car model we made

    await Driver_1.car().save(car_model_1)
    await Driver_2.car().save(car_model_2)
    await Driver_3.car().save(car_model_3)
    await Driver_4.car().save(car_model_4)
    await Driver_5.car().save(car_model_5)

  }
}

module.exports = DatabaseSeeder
