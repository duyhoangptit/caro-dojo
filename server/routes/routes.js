var appRouter = function(app) {
    app.get('/', responeHello);
    app.post("/setup", responseBoardId);
    app.post("/join/:boardId", responseBoardJoinId);
    app.post("/play/:boardId/:playerId/:row/:column", responseBoardPlay);
}

function responeHello(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send('Hi there :)');
}

function responseBoardId (req, res) {
    res.set('Content-Type', 'text/json');
    res.send('board: 1A23D4F');
}

function responseBoardJoinId (req, res) {
    if (!req.params.boardId) {
        res.status(500).send({ error: 'Something failed!' })
    }
    res.set('Content-Type', 'text/json');
    res.send('turn: 1');
}

function responseBoardPlay(req, res) {
    res.set('Content-Type', 'text/json');
    res.send('{ok}');
}

module.exports = appRouter;
