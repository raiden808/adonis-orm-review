'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GaragesSchema extends Schema {
  up () {
    this.create('garages', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('garages')
  }
}

module.exports = GaragesSchema
