const express = require('express');
const route = express.Router()

const services = require('../sevices/render')
const controller = require('../controller/controller')

/*

* @description Root Route
* @method GET /

*/

route.get('/',services.homeRoutes);

/*

* @description add supplement
* @method GET /add-supplement

*/

route.get('/add-supplement',services.add_supplement);

/*

* @description update supplement
* @method GET /update-supplement

*/


route.get('/update-supplement',services.update_supplement);

//API
route.post('/api/supplements',controller.create);
route.get('/api/supplements',controller.find);
route.put('/api/supplements/:id',controller.update);
route.delete('/api/supplements/:id',controller.delete);

module.exports = route