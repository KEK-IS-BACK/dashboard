const {Router} = require('express')
const Profile = require('../models/Profile')
const auth = require('../middleware/auth.middleware')

const router = Router()

// api/profile/
router.get(
  '/',
  auth,
  async (request, response) => {
    try {
      const {profile} = request

      const profileData = await Profile.findOne({_id: profile.profileId})

      if(!profileData) {
        return response.status(400).json({message: 'Пользователь не найден'})
      }

      const {fullName, _id: id} = profileData

      return response.json({fullName, id})
    } catch (e) {
      response.status(500).json({message: 'Ошибка на сервере'})
    }
  })

module.exports = router