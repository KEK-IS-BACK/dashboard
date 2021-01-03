const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
  fullName: {type: 'String', required: true},
  aboutMe: {type: 'String'},
  date: {type: String, default: Date.now},
  owner: {type: Types.ObjectId, ref: 'User'}
})

model.exports = model('innerUser', schema)