import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("users").del();
    await knex("users").insert([
        { id: "cde5bde7-818f-4a89-9de4-514b205d2936", email: "user1@mail.com", name: "user 1" },
        { id: "2e6edded-09cd-40b3-8698-c32a86d607aa", email: "user2@mail.com", name: "user 2" },
        { id: "747d7195-fcab-4ccf-805d-928acc01e363", email: "user3@mail.com", name: "user 3" },
    ])

    await knex("products").del();
    await knex("products").insert([
        { id: 1, name: "product 1", price: 100.1 },
        { id: 2, name: "product 2", price: 200.1 },
        { id: 3, name: "product 3", price: 300.1 },
        { id: 4, name: "product 4", price: 400.1 },
        { id: 5, name: "product 5", price: 500.1 },
    ]);

    await knex("orders").del();
    await knex("orders").insert([
        { id: 1, user_id: "cde5bde7-818f-4a89-9de4-514b205d2936" },
        { id: 2, user_id: "747d7195-fcab-4ccf-805d-928acc01e363" },
        { id: 3, user_id: "747d7195-fcab-4ccf-805d-928acc01e363" },
    ])

    await knex("order_products").del();
    await knex("order_products").insert([
        { id: 1, order_id: 1, prod_id: 1 },
        { id: 2, order_id: 1, prod_id: 3 },
        { id: 3, order_id: 1, prod_id: 4 },
        { id: 4, order_id: 2, prod_id: 1 },
        { id: 5, order_id: 2, prod_id: 3 },
        { id: 6, order_id: 3, prod_id: 2 },
        { id: 7, order_id: 3, prod_id: 1 },
        { id: 8, order_id: 3, prod_id: 3 },
        { id: 9, order_id: 3, prod_id: 4 },
    ])
};
