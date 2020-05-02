const os = require('os');

const getOperatingSystem = () => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();

  console.log(`Total memory: ${totalMemory}`);
  console.log(`Free memory: ${freeMemory}`);
  return {
    totalMemory,
    freeMemory
  };
};

module.exports = getOperatingSystem;
