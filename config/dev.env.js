const merge = require("webpack-merge");
const prodEnv = require("./prod.env");
// lets get crack-a-lacking
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
});
