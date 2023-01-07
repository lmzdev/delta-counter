# delta-counter
[![npm Build/Test](https://github.com/lmzdev/delta-counter/actions/workflows/node.js.yml/badge.svg)](https://github.com/lmzdev/delta-counter/actions/workflows/node.js.yml)

Count average events per second in a timespan. Just like adding a tally counter to ```setInterval()```.

## Example/Concept
```js
import * as Mqtt from 'mqtt'
import { DeltaCounter } from 'delta-counter'

const client = Mqtt.connect()
client.on('connect', () => {
    client.subscribe('#')
}

const intervalSec = 5
const dc = new DeltaCounter(intervalSec, (eventsPerSecond) => {
    console.log("Average number of messages per second: "+eventsPerSecond)
}).start()

client.on('message', () => dc.tick())

```