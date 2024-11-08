const express = require('express')

app = express()
port = 3000

app.get('/', (req, res) => {
    res.send(`<h1>Dummy App</h1><p>Auto scaling app.</p>`)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
