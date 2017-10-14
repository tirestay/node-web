var express = require('express');
var router = express.Router();

require('./module1')(router);
require('./module2')(router);

module.exports = router;
