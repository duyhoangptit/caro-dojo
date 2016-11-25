var appRouter = function(app) {
    app.get('/', responeHello);
}

function responeHello(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send('Hi there :)');
}

module.exports = appRouter;