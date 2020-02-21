'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DriversSchema extends Schema {
  up () {
    this.create('drivers', (table) => {
      table.increments() //primary key id
      table.string('name', 80).notNullable().unique() // unique name
      table.integer('garage_id',11).unsigned().references('id').inTable('garages')  
      table.timestamps()
    })
  }

  down () {
    this.drop('drivers')
  }
}

module.exports = DriversSchema
