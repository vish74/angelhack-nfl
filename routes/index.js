'use strict';
const fs = require('fs');

// Trainer script


function readGame(gameIndex) {
    return fs.readFileSync('data/full-game-1.json');
}

function parseGame(gameIndex) {
    return readGame(gameIndex).toString().trim().split('\n').map(JSON.parse);
}
/*
function readTeam(teamIndex) {
    return fs.readFileSync('data/team1.json');
}

function parseTeam(teamIndex) {
    return JSON.parse(readGame(teamIndex));
}*/

exports.first = function(req, res) {
    var game = parseGame(1);
    var play = game;
    var aa = JSON.stringify(play);

    res.render('index', {
        'title': aa
    });
};

exports.second = function(req, res) {

    const trainer = require('../trainer');
    const players = trainer.players();
    const game = trainer.Game.fromIndex(1, players);
    const arrs = [21,22,23,24];
    const plays = game.getPlays();

    const playerStats = {};
    plays.forEach(play => {
        if (play.play) {
        // console.log(play.play.playStats);
        play.play.playStats.forEach(player => {
            const nflId = player.nflId;
        const statID = player.statId;
        if (!nflId) return;
        if (playerStats[nflId]) {
            //console.log(statID);
            if (arrs.indexOf(statID)>0) {
                playerStats[nflId] += 1;
            }
        } else {
            playerStats[nflId] = 1;
        }
    });
}
});
var aas = JSON.stringify(playerStats);
    res.render('index', {
        'title': aas
    });
};


