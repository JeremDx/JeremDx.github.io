let app = require('express')()

app.get('/', (req, res) => {
    res.sendfile('./views/pages/index2.html');
})

app.listen(8080);