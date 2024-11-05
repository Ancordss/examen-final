

const env = {
  username: "admin",
  password: "9VU71769XubPrPDTYajg9ji8okGIBXeA",
  database: "examen_18no",
  host: "dpg-cskmofm8ii6s73ftlu7g-a.oregon-postgres.render.com",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;