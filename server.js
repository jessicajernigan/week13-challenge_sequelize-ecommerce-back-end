const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); // import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


// sync sequelize models to the database, then turn on the server
// force: true adds a DROP TABLE IF EXISTS before trying to create the table.
// If you force, existing tables will be overwritten.
// This allows the table to be overwritten and re-created.
// TURN BACK TO FALSE FOR PRODUCTION
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
