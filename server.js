let app = require('express')()

app.get('/', (req, res) => {
    res.send('index.ejs');
})

app.listen(8080)