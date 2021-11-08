const path = require('path');
const express = require('express');
const userController = require('./controllers/userController');
const app = express();
const cors = require('cors');

const trackerController = require('./controllers/trackerController');

const PORT = 3000;
/**
 * handle parsing request body
 */
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));

/**
 * USER ROUTE HANDLERS
 */
app.post('/user/create', userController.addUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
})

app.get('/user/get', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.users);
})

app.get('/user/getUser', userController.getUser, (req, res) => {
  res.status(200).json(res.locals.user);
})

app.post('/user/signup', userController.addUser, (req, res) => {
  res.send(res.locals.newUser);
});

app.post('/user/signin', userController.authenticateUser, (req, res) => {
  const response = {
    userFound: res.locals.userFound,
    userVerified: res.locals.userVerified,
    user: res.locals.user
  };
  
  if (response.userFound && response.userFound) {
    res.statusCode = 200;
  } else res.statusCode = 401;
  res.send(response);
});

app.post('/user/updateTracking', userController.updateTracking, (req, res) => {
  res.status(201).json(res.locals.tracking)
})

//****API CALL****
app.post('/api/test', trackerController.getInfo, (req, res) => {
  //console.log(res.locals)
  return res.status(200).json(res.locals)
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("Page not found")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;