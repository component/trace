
# trace

  Client-side tracing for performance analysis in production.

## Installation

    $ component install component/trace

## API

### Cycle(id, name)

  Initialize a new Tracer with the given `id`
  and `name`. A "cycle" represents N related traces,
  these traces may be sequential or concurrent, later
  graphed to show you how long the cycle and its components
  spent processing.

### Cycle#start(type:String, [date]:Number|Date)

  Trace start of `type` with optional `date`.

### Cycle#end(type:String, [date]:Number|Date)

  Trace end of `type` with optional `date`.

### .flush()

  Return all cycles collected thus far, flushing them for subsequent calls.
  This method allows you to report the cycles to the server periodicially,
  you'll likely want to also transmit user-agent data along with this.

```js
var cycle = require('trace');
cycle.flush();
```

Yields an array similar to the following with your trace data:

```json
[
  {
    "id": 1,
    "cycle": "upload",
    "type": "upload",
    "start": 1366405821464
  },
  {
    "id": 1,
    "cycle": "upload",
    "type": "thumb",
    "start": 1366405822465
  },
  {
    "id": 1,
    "cycle": "upload",
    "type": "thumb",
    "end": 1366405822766
  },
  {
    "id": 1,
    "cycle": "upload",
    "type": "upload",
    "end": 1366405823268
  }
]
```

## License

  MIT
