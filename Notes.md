# Notes

## Node JS

- Runtime environment for executing JavaScript code outside the browser
- Known for building API (Aplication Program Interface)
- Ideal for building highly scalablem data-intensive and real-time apps
- _RYAN DAHL_

## How Node Works

### Non-Blocking

- Node JS is defaultly asynchronous architecture

### Single Thread

- Used to handle multiple request

### Ideal

- Operations that touch the file system (disk) or the network (access)

### Do Not Use Node

- For CPU intensive apps (image manipulations, video encoding, etc)
- For a lot of calculations done by CPU

## Modularity

Small building blocks or module. In Node, every file is a _module_.

### Under The Hood

```javascript

function(exports, required, module, __dirname, __filename){
    // module codes
}
```

A module codes are wrap in a function with arguments of:

- exports
- required
- module
- \_\_dirname
- \_\_filename
