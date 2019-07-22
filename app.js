var port = 8080;

const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const routes = require('./routes/index');
const router = express.Router();

const app = new express();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '')));

// app.use('/',routes);
// routes.initalize(app);

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = router;
