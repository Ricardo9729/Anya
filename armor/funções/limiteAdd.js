const fs = require('fs')
const toMs = require('ms')
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const _limit = JSON.parse(fs.readFileSync('./armor/FilesJson/grupos/limit.json'))

const limitAdd = (sender) => {
let position = false
Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
position = i
}
})
if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./armor/FilesJson/grupos/limit.json', JSON.stringify(_limit))
}
}

module.exports = { limitAdd }