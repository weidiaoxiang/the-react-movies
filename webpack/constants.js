const path = require("path");

const ABSOLUTE_BASE = path.normalize(path.join(__dirname, ".."));

/**
 * Get real path
 * @param  {string}   absolute
 * @return {function}
 */
const getAbsPath = absolute => (...dir) => path.join(absolute, ...dir);
const getFullPath = getAbsPath(ABSOLUTE_BASE);

const constants = Object.freeze({
  ABSOLUTE_BASE,
  NODE_MODULES_DIR: getFullPath("node_modules"),
  BUILD_DIR: getFullPath("build"),
  DIST_DIR: getFullPath("dist"),
  SRC_DIR: getFullPath("src"),
  PUBLIC_DIR: getFullPath("public"),
  DEV_SERVER_PORT: 8080,
});

module.exports = constants;
