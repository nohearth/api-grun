const message = require('./messages.json')

function makeResponseError(res, code) {
  const msg = { code: code, text: message[[code]]}
  res.status(202).json(msg)
}

module.exports = {
  makeResponseError
}