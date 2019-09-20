module.exports = {
  //rename for the you database name
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'default',
  database: 'localDB',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}