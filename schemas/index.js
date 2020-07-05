require('dotenv').config();
const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {
    const { DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env;
    mongoose.connect(
      // 'mongodb://localhost:30000/',
      `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      err => {
        if (err) console.log(err);
        else console.log('몽고디비 연결 성공');
      },
    );
  };
  connect();
  /* error 발생 시에 Error 생성 */
  mongoose.connection.on('error', err => {
    throw new Error(err);
  });
  mongoose.connection.on('disconnected', connect);
  require('./User');
  require('./Board');
};
