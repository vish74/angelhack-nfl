'use strict';

const fs = require('fs');

class Game {

  constructor(plays, players) {
    this.plays = plays;
    this.players = players;
  }

  getPlays() {
    const plays = [];
    for (let i = 0; i < this.plays.length; i++) {
      plays.push(this.getPlay(i));
    }
    return plays;
  }

  getPlay(index) {
    const play = Object.assign({}, this.plays[index]);
    const populatePlayer = data => {
      return {
        player: this.players[data.nflId],
        trackingData: data.playerTrackingData
      };
    };
    if (play.homeTrackingData) {
      play.homeTrackingData = play.homeTrackingData.map(populatePlayer);
    }
    if (play.awayTrackingData) {
      play.awayTrackingData = play.awayTrackingData.map(populatePlayer);
    }
    return play;
  }

  static read(gameIndex) {
    return fs.readFileSync(`${__dirname}/../data/full-game-${gameIndex}.json`);
  }

  static parse(gameIndex) {
    return this
      .read(gameIndex)
      .toString()
      .trim()
      .split('\n')
      .map(JSON.parse);
  }
  static fromIndex(gameIndex, players) {
    return new Game(this.parse(gameIndex), players);
  }

  static parseAll() {
    var games = [];
    for (var i = 1; i <= 3; i++) {
      games.push(this.parse(i));
    }
    return games;
  }

}

module.exports = Game;
