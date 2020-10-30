const path = require('path')

module.exports = (phase, { defaultConfig }) => {
  return {
    /* config options for all phases except development here */
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
  };
};
