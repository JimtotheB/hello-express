/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project hello-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

const express = require('express')
const router = express.Router()

// Per Route handler middleware, this will run on each request.
router.use((req, res, next) => {

 // You can use middleware to set up the request for request handlers that come later.
 req.derp = "Mutating is usually bad."
 console.log(new Date().toISOString())
 next()
})

router.get('/', (req, res, next) => {
 // req.dep here was set above in the middleware.
 console.log(req.derp)
 res.json({mutating: "state", is: "not good", it: "Leads to errors"})
})

router.get('/middleware', (req, res, next) => {

 console.log("do whatever here, then call next()")
 //Call next
 next()
}, (req,res ) => {
 res.json({message: "dont do this usually, one route handler, that actually handles the route."})
})

module.exports = router