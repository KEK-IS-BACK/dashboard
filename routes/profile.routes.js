const {Router} = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')

const router = Router()

// api/profile/
router.get(
  '/',
  auth,
  async (request, response) => {
    try {
      const {user} = request

      const userData = await User.findOne({_id: user.userId})

      if(!userData) {
        return response.status(400).json({message: 'Пользователь не найден'})
      }

      const {fullName, _id: id} = userData

      return response.json({fullName, id})
    } catch (e) {
      response.status(500).json({message: 'Ошибка на сервере'})
    }
  })

module.exports = router