module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  // const Category = require('../../models/Category')

  router.post('/categories', async (req, res) => {
    // const model = await Category.create(req.body)
    console.log(req.body);
    res.send({
      response: '',
      msg: 'success'
    })
  })
  app.use('/admin/api', router)
}