//connect to mongo
const mongoose = require('mongoose');

const connectToMongo = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('error', err => {
    console.log(`Your error ${err} `);
  });
};

module.exports = connectToMongo;
