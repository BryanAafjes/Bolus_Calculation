module.exports = {
   "port": process.env.DB_PORT,
   "host": process.env.DB_HOST,
   "database": process.env.DB_DATABASE,
   "username": process.env.DB_USERNAME,
   "password": process.env.DB_PASSWORD,
   "synchronize": true,
   "logging": true,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
