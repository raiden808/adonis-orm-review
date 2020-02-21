'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DriversSchema extends Schema {
  up () {
    this.create('drivers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('drivers')
  }
}

module.exports = DriversSchema
