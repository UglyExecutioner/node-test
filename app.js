const express = require('express')
require('dotenv').config()
const Router = require('./routes/index');
const app = express()
const port = process.env.PORT
const router = express.Router();
router.use('/api/v1', Router);
app.use(router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})