// Trainer script

const trainer = require('../trainer');

const players = trainer.players();
const game = trainer.Game.fromIndex(1, players);

const play = game.getPlay(2);

console.log(play.play.playStats);
console.log(play.homeTrackingData[0])

/*
console.log(play.homeTrackingData[0].map(function(data) {
  return {
    time: data.time
  }
}));
 */
