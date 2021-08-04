import { Knex } from "knex";


export async function up(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
      table.string('email')
      table.string('name')
    }),
    knex.schema.createTable('products', table => {
      table.increments('id').primary()
      table.string('name')
      table.decimal('price')
    }),
    knex.schema.createTable('orders', table => {
      table.increments('id').primary()
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
      table.uuid('user_id').references('id').inTable('users')
    }),
    knex.schema.createTable('order_products', table => {
      table.increments('id').primary()
      table.integer('order_id').references('id').inTable('orders')
      table.integer('prod_id').references('id').inTable('products')
    }),
  ])
}


export async function down(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.dropTableIfExists('order_products'),
    knex.schema.dropTableIfExists('products'),
    knex.schema.dropTableIfExists('orders'),
    knex.schema.dropTableIfExists('users'),
  ])
}

