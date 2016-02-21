const fs = require('fs');

function readGame(gameIndex) {
    return fs.readFileSync('data/full-game-1.json');
}

function parseGame(gameIndex) {
    return readGame(gameIndex).toString().trim().split('\n').map(JSON.parse);
}

function readTeam(teamIndex) {
    return fs.readFileSync('data/team1.json');
}

function parseTeam(teamIndex) {
    return JSON.parse(readGame(teamIndex));
}

exports.first = function(req, res) {
    var game = parseGame(1);

    var play = game[2];
    var aa = JSON.stringify(play);

    res.render('index', {
        'title': aa
    });
};
