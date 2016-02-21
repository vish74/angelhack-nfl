'use strict';

// Trainer script

const trainer = require('../trainer');

const players = trainer.players();
const game = trainer.Game.fromIndex(1, players);

const plays = game.getPlays();

plays.forEach(play => {
  if (play.play) {
  } else {
    console.log(play);
  }
});
