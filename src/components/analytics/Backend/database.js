const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false, // Disable logging for cleaner output
});

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Sync models and seed initial data
sequelize.sync({ force: false }).then(async () => {
  console.log('Database synchronized.');

  // Seed initial data if necessary
  const { User, Service } = require('./models');

  // Seed users
  const userCount = await User.count();
  if (userCount === 0) {
    await User.bulkCreate([
      { name: 'Admin User', email: 'admin@example.com', password: 'admin123' },
      { name: 'Regular User', email: 'user@example.com', password: 'user123' },
    ]);
    console.log('Seeded initial users.');
  }

  // Seed services
  const serviceCount = await Service.count();
  if (serviceCount === 0) {
    await Service.bulkCreate([
      { name: 'Traditional Funeral Service', description: 'Complete funeral service with viewing and ceremony', price: 5500 },
      { name: 'Cremation Service', description: 'Direct cremation with memorial service', price: 3200 },
    ]);
    console.log('Seeded initial services.');
  }
});

module.exports = sequelize;
