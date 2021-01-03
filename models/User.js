const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  fullName: {type: String, required: true},
  date: {type: Date, default: Date.now}, // Дата создания аккаунта
  innerUsers: {type: Types.ObjectId, ref: 'innerUser'}
})

module.exports = model('User', schema)