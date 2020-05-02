const path = require('path');

const getPath = () => {
  const pathObject = path.parse(__filename);

  console.log(pathObject);

  return pathObject;
};

module.exports = getPath;
