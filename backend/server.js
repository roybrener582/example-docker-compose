const express = require('express')
//const redis = require('redis')
const bodyParser = require('body-parser')
//const continents = require ('./src/BL/continents.service.js')
const routes = require('./src/routes')
// Constants
const PORT = 3001
const HOST = '0.0.0.0'

// Env vars
const redisUrl = process.env.REDIS_URL
const redistPort = process.env.REDIS_PORT || 6379

//Redis
/*const client = redis.createClient({
  host: redisUrl,
  port: redistPort,
})*/
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)

/*client.on('connect', () => {
  console.log('Redis client connected to docker container')
})
client.on('error', (err) => {
  console.log('Redis client cant connect ', err)
})*/

// App
/*
app.get('/', async (req, res) => {
  res.json({
    url: redisUrl,
    message: 'Service Connected',
  })
})
app.post('/data', (req, res) => {
  /*const body = req.body
  const data = body.data
  client.set(data.key, data.value, (err, reply) => {
    if (!err) {
      res.json({ result: data, success: true })
    } else {
      res.json({ result: null, success: false })
    }
  })*/
/*})
app.get('/data/:key', async (req, res) => {
  const data = await continents.getContinents();
  res.json({ result: data, success: true })
  /*const key = req.params.key
  client.get(key, (err, data) => {
    if (!err) {
      if (data) {
        res.json({ result: { key, value: data }, success: true })
      } else {
        res.json({ result: null, success: false })
      }
    } else {
      res.json({ result: null, success: false })
    }
  })*/
//}) 
app.listen(PORT, HOST, () => {
  console.log(`Server Listen to ${HOST}:${PORT}`)
})


module.exports = app