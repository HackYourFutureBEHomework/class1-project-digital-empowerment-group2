const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken')




require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => { console.log('Database connection established'); })
  .catch((err) => {
    console.error(`Database error, exiting. Stack trace:\n${err}`);
    process.exit();
  });
mongoose.set('useFindAndModify', false);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'API ready' });
});

const { JWT_SECRET } = process.env;
const userEmail = 'wameedh112@gmail.com';
const userPassword = "1234";

app.post('/api/login', async (req, res) => {
  // res.json({ message: 'API ready' });
  const { email, password } = req.body;
  // console.log(email, password);
  if ( email === userEmail && password === userPassword) {
    const payload = { email };
    const token = jwt.sign(payload, JWT_SECRET, {
      // expiresIn: 'h3'
    });
    res.send({ token, email });
  } else {
    res.status(403).send({ message: 'incorrect email or password'})
  }
});


require('./src/route/path.route')(app);
require('./src/route/module.route')(app);

//const User = require('../user/User');
require('./src/route/user.route')(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

