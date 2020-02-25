'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Initialize model for route access
 */
const Car    = use('App/Models/Car')
const Garage = use('App/Models/Garage')
const Driver = use('App/Models/Driver')

Route.on('/').render('welcome')

// Retrieve all drivers associated with the `id` garage
Route.get('/garage/:id/drivers', async ({ params }) => {
    const garage = await Garage.find(params.id)
    return garage.drivers().fetch()
})

// Retrieve all cars associated with the `id` garage
Route.get('garage/:id/cars', async ({ params }) => {
    const garage = await Garage.find(params.id)
    return garage.cars().fetch()
})

// Retrieves all garages associated with the `id` driver
Route.get('/driver/:id/garage', async ({ params }) => {
    const driver = await Driver.find(params.id)
    return driver.garage().fetch()
})

// Retrieves a single instance of a car Model associated with the `id` driver.
Route.get('driver/:id/car', async ({ params }) => {
    const driver = await Driver.find(params.id)
    return driver.car().fetch()
})

// Retrieves a single instance of a driver Model associated with the `id` car
Route.get('car/:id/driver', async ({ params }) => {
    const car = await Car.find(params.id)
    return car.driver().fetch()
})