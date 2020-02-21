'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GaragesSchema extends Schema {
  up () {
    this.create('garages', (table) => {
      table.increments() //primary key id
      table.string('name', 80).notNullable().unique() // unique name
      table.timestamps() // created_at, updated_at time stamps
    })
  }

  down () {
    this.drop('garages')
  }
}

module.exports = GaragesSchema
