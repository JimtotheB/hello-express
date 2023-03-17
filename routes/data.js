/**
 * @file data
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project hello-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

const express = require('express')
const router = express.Router()


const mockData = {
  a: ["a", "a", "a", {msg: 'Mixed Arrays are not good.'}],
  b: ["b", "b", "b", {msg: 'Mixed Arrays are Useful'}],
  c: ["c", "c", "c", {msg: 'Mixed Arrays are... No, dont do this.'}]
}


router.get('/', (req, res) => {
  res.json(mockData)
})

// :id here will be accessable below on req.params['id']
router.get('/:id', (req, res, next) => {
  const found = mockData[req.params['id']]
  if(found){
    return res.json(found)
  }
  return res.status(404).json({error: 'Not found'})
})


module.exports = router