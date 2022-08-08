const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE);
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT}!`)
    );
  } catch (err) {
    console.error('Connection to MongoDB failed', err.message);
  }
};

connectDB();

mongoose.connection.on('open', () =>
  console.log('Connection to database has been established successfully')
);
mongoose.connection.on('error', (err) => console.log(err));

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
