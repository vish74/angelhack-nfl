'use strict';

// Trainer script

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

console.log(playerStats);

/*
console.log(play.homeTrackingData[0].map(function(data) {
  return {
    time: data.time
  }
}));
 */
