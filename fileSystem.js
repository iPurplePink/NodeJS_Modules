const fs = require('fs');

const getFileSystem = () => {
  const fileSync = fs.readdirSync('./');
  console.log(fileSync);

  const file = fs.readdir('./', function(error, result) {
    if (error) {
      console.log(`Error: ${error}`);
      return error;
    }
    console.log(`Result: ${result}`);
    return result;
  });
  console.log(file);

  return fileSync;
};

module.exports = getFileSystem;
