import { Model } from "objection"
import { Product } from "./product.model"
import { User } from "./user.model"

export class Order extends Model {
  static get tableName () {
    return 'orders'
  }

  static get relationMappings () {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'orders.user_id',
          to: 'users.id'
        }
      },
      product: {
        relation: Model.ManyToManyRelation,
        modelClass: Product,
        join: {
          from: 'orders.id',
          through:{
            from: 'order_products.order_id',
            to: 'order_products.prod_id',
          },  
          to: 'products.id'
        }
      }
    }
  }
}
