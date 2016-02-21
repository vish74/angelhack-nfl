const fs = require('fs');

const Game = require('./game');

function readTeam(teamIndex) {
  return fs.readFileSync(`${__dirname}/../data/team${teamIndex}.json`);
}

function parseTeam(teamIndex) {
  return JSON.parse(readTeam(teamIndex));
}

function parseTeams() {
  const teams = {};
  for (var i = 1; i <= 6; i++) {
    teams[i.toString()] = parseTeam(i);
  }
  return teams;
}

function players() {
  const players = {};
  const teams = parseTeams();
  Object.keys(teams).forEach(teamId => {
    teams[teamId].teamPlayers.forEach(player => {
      players[player.nflId] = player;
    });
  });
  return players;
}

module.exports = {
  Game: Game,
  parseTeams: parseTeams,
  players: players
};
