'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Garage extends Model {

    drivers () {
        return this.hasMany('App/Models/Driver')
    }

    cars () {
        return this.manyThrough('App/Models/Driver','car')
    }

}

module.exports = Garage
