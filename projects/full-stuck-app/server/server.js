// // call the packages we need
// const express = require('express');        // call express
// const app = express();                 // define our app using express
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// // configure app to use bodyParser()
// // this will let us get the data from a POST
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const port = process.env.PORT || 8080;        // set our port

// // ROUTES FOR OUR API
// // =============================================================================
// const router = express.Router();              // get an instance of the express Router


// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.route
//     .get('/', (req, res) => {
//        body.json({ message: 'Succes!' })
//     });

// //middleware to use for all requests
// router.use((req, res, next) => {

//     //do logging
//     console.log('How do we choo.');
//     next();     // make sure we go to the next routes and dont stop here
// })
// // more routes for our API will happen here


// // on routes that end in /bears
// router.route('/bears')



//     // create a bear (accesses at POST http://localhost:8080/api/bears)
//     .post((req, res) => {
//         const bear = new Bear();          // create a new instance of the Bear model
//         bear.name = req.body.name       // set the bears name (comes from the request)

//         //save the bear and check for errors
//         bear.save((err) => {
//             if (err)
//                 res.send(err);
//             res.json({ message: 'Bear created' });
//         });
//     })

//     // get all the bears (accessed at GET http://localhost:8080/api/bears)
//     .get((req, res) => {
//         Bear.find((err, bears) => {
//             if (err)
//                 res.send(err);
//             res.json(bears);
//         });
//     });
// router.route('/bears/:bear_id')

//     // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
//     .get((req, res) => {
//         Bear.findById(req.params.bear_id, (err, bear) => {
//             if (err)
//                 res.send(err);
//             ress.json(bear);

//         });
//     })
//     // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
//     .put(function (req, res) {

//         //use our bear model to find the bear we want
//         Bear.findById(req.params.bear_id, (err, bear) => {
//             if (err)
//                 res.send(err);
//             bear.name = req.body.name;  // update the bears info

//             // save the bear
//             bear.save((err) => {
//                 if (err)
//                     res.send(err);
//                 res.json({ message: 'Bear updated' });
//             });
//         });
//     })
//     // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
//     .delete((req, res) => {
//         Bear.remove({
//             _id: req.params.bear_id
//         }, (err, bear) => {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'Successfully deleted' });
//         });
//     });
// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// app.use('/api', router);

// // START THE SERVER
// // =============================================================================
// mongoose.connect('mongodb://localhost:27017/bears', (err) => {
//     if (err) console.error(err),
//         console.log("connected to MongoDB")
// })
// app.listen(port);
// console.log('Server started successfully ' + port);




// const Bear = require('./bear');
