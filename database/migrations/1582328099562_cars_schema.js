'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarsSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarsSchema
