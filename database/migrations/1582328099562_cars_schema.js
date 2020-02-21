'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarsSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments() //primary key id
      table.string('brand', 80).notNullable().unique() // unique name
      table.integer('driver_id',11).unsigned().references('id').inTable('drivers') // foreign key to driver table's id      
      table.timestamps() // created_at, updated_at time stamps
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarsSchema
