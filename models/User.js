const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
  fullName: {type: String, required: true},
  aboutMe: {type: String},
  phone: {type: String, required: true},
  place: {type: String, required: true},
  date: {type: Date, default: Date.now},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('User', schema)