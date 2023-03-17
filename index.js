//PORT=<some port number> node index.js to set a custom port, otherwise default to 8080
const PORT = process.env['PORT'] || 8080

const express = require('express')

// Create the app, everything attaches to this.
const app = express()

// Require child routr modules
const demo = require('./routes')
const data = require('./routes/data')

// You can mount the same child router on multiple parent route, usually no need to ever do this, but it's possible.

// localhost:8080/     { same
// localhost:8080/demo   same }

// localhost:8080/middleware      { same
// localhost:8080/demo/middleware   same }

app.use('/',demo)
app.use('/demo', demo)

// localhost:8080/data returns all
// localhost:8080/data/[a | b | c] returns data based on /data/:id
//localhost:8080/data/<anything else> return 404 not found

app.use('/data', data)

app.listen(PORT, () => {
  console.log(`Express on localhost:${PORT}`)
})