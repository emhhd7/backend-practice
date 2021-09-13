const app = require('./routes')

app.set('port', 4000)

const server = app.listen(app.get('port'))
server.on('listening', listening)

function listening() {
    console.log('App running at 4000.')
}