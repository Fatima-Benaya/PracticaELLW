require('dotenv').config();
const { app } = require('./app');
const { connectDB } = require('./config/db');

const port = process.env.PORT || 3000;

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(` API running on http://localhost:${port}`));
  })
  .catch(err => {
    console.error(' DB connection error', err);
    process.exit(1);
  });
