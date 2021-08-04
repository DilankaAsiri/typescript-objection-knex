
import Knex from "knex";
import { Model } from "objection";
import connection from "./database/knexfile";

import { User } from "./models/user.model"
import { Order } from "./models/order.model"

const knexConnection = Knex(connection)

Model.knex(knexConnection)

// get all users
async function getAllUsers() {
  console.log(await User.query())
}
// getAllUsers()

// get all orders
async function getOrders() {
  console.log(
    await Order.query()
      .withGraphJoined('user')
      .withGraphJoined('product'))
}
getOrders()