import { Knex } from "knex";

const config: Knex.Config = {
  client: 'postgresql',
  connection: {
    database: 'postgres_test',
    user: 'postgres',
    password: 'postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};

export default config;