// require('dotenv').config();

//set empMgmtApiUrl=http://localhost:8081/emp

// console.log('env = ' + JSON.stringify( process.env));
console.log('empMgmtApiUrl = ' + process.env.empMgmtApiUrl);

const PROXY_CONFIG = {
  "/emp": {
    "target": process.env.empMgmtApiUrl,
    "secure": false,
    "pathRewrite": {
      "^/emp": ""
    },
    "changeOrigin": true,
    "logLevel": "debug"
  }
}

module.exports = PROXY_CONFIG
