#!/usr/bin/env bash

mkdir data
curl https://s3.amazonaws.com/ngs-hackathon/games/game-1/full/full-game-1.json > data/full-game-1.json
curl https://s3.amazonaws.com/ngs-hackathon/games/game-2/full/full-game-2.json > data/full-game-2.json
curl https://s3.amazonaws.com/ngs-hackathon/games/game-3/full/full-game-3.json > data/full-game-3.json

curl https://s3.amazonaws.com/ngs-hackathon/rosters/team1.json > data/team1.json
curl https://s3.amazonaws.com/ngs-hackathon/rosters/team2.json > data/team2.json
curl https://s3.amazonaws.com/ngs-hackathon/rosters/team3.json > data/team3.json
curl https://s3.amazonaws.com/ngs-hackathon/rosters/team4.json > data/team4.json
curl https://s3.amazonaws.com/ngs-hackathon/rosters/team5.json > data/team5.json
curl https://s3.amazonaws.com/ngs-hackathon/rosters/team6.json > data/team6.json
