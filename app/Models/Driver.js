'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Driver extends Model {

    garage () {
        return this.belongsTo('App/Models/Garage')
    }

    car () {
        return this.hasOne('App/Models/Car')
    }

}

module.exports = Driver
