const EventEmitter = require('events');

const createEmitter = () => {
  const emitter = new EventEmitter();

  let result = {};

  emitter.on('developer_channel', function(parameters) {
    console.log('A Developer Called');
    result = parameters;
  });

  emitter.emit('developer_channel', { name: 'Maridin', age: '23' });

  return result;
};

module.exports = createEmitter;
