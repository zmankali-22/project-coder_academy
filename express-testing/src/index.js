
const {app, port} = require('./server')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})