const fs = require('fs');

function readGame(gameIndex) {
  return fs.readFileSync(`${__dirname}/../data/full-game-${gameIndex}.json`);
}

function parseGame(gameIndex) {
  return readGame(gameIndex).toString().trim().split('\n').map(JSON.parse);
}

function readTeam(teamIndex) {
  return fs.readFileSync(`${__dirname}/../data/team${gameIndex}.json`);
}

function parseTeam(teamIndex) {
  return JSON.parse(readGame(teamIndex));
}

module.exports = {
  readGame: readGame,
  parseGame: parseGame
};
