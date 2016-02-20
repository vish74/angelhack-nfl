// Trainer script

var trainer = require('../trainer');

var game = trainer.parseGame(1);

var play = game[2];

console.log(play)

/*
console.log(play.homeTrackingData[0].map(function(data) {
  return {
    time: data.time
  }
}));
 */
