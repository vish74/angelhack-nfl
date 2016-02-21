'use strict';

// Trainer script

const trainer = require('../trainer');

const players = trainer.players();
const game = trainer.Game.fromIndex(1, players);

const plays = game.getPlays();

const playerStats = {};
plays.forEach(play => {
  if (play.play) {
    play.play.playStats.forEach(player => {
      const nflId = player.nflId;
      if (!nflId) return;
      if (playerStats[nflId]) {
        playerStats[nflId] += 1;
      } else {
        playerStats[nflId] = 1;
      }
    });
  }
});

console.log(playerStats);

/*
console.log(play.homeTrackingData[0].map(function(data) {
  return {
    time: data.time
  }
}));
 */
