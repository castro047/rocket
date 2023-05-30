function getFlagValue(flag) {
  const index = process.argv.indexOf(Flag) + 1;
  return process.argv[index];
}
module.exports = getFlagValue;
