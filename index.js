const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send("Hello world Burak!")
})

app.listen(PORT, () => console.log("Application listening on port " + PORT))
