# backend

## Setup

Run `grab_data.sh` to grab all of the NFL data.

Then, run `npm install`.

## Performance

Performance is based on how well a player does in games. This has to do with how many positive `playStats` a player has and the magnitude (in yards) of those stats.

## Parameters

We use many parameters to calculate the probability.

* `dist` -- Distance
* `crowd_qb` -- Crowd between QB and receiver
* `crowd_rc` -- Crowd between receiver and QB
* `speed` -- Relative speed between players
* `synergy` -- How well the two players interact with each other
* `perf_qb` -- QB performance
* `perf_rc` -- Receiver performance

This is all fed through a machine learning algorithm to provide us with probabilities of success every 100ms.
