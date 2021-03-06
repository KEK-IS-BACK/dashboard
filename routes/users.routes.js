const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const User = require('../models/User')
const {body, validationResult} = require("express-validator");

const router = Router()

// api/users/create
router.post(
  '/create',
  auth,
  async (require, response) => {
    try {
      const {fullName, aboutMe, phone, place} = require.body
      const {profile} = require

      const candidate = new User({fullName, aboutMe, phone, place, owner: profile.profileId})

      await candidate.save()

      response.status(201).json({message: 'Пользователь создан'})
    } catch (e) {
      response.status(500).json({message: 'Внутренняя ошибка сервера'})
    }
  })

// api/users/ (get запрос)
router.get('/', auth,
  async (require, response) => {
    try {
      const {profile} = require

      const users = await User.find(
        {owner: profile.profileId},
        ['fullName', 'aboutMe', 'phone', 'place']
      )

      response.json([...users])
    } catch (e) {
      response.status(500).json({message: 'Внутренняя ошибка сервера'})
    }
  })

// api/users/:id (delete запрос)
router.delete('/:id',
  auth,
  async (request, response) => {

    try {
      await User.findByIdAndDelete(request.params.id)

      response.json({message: 'Пользователь удален'})
    } catch (e) {

      response.status(500).json({message: 'Внутренняя ошибка сервера'})
    }
  })

// api/users/update/:id (Put запрос)
router.put('/update/:id',
  [
    body('fullName', 'Введите ФИО').not().isEmpty().trim().escape(),
    body('phone', 'Введите ФИО').not().isEmpty().trim().escape(),
    body('place', 'Введите ФИО').not().isEmpty().trim().escape()
  ],
  auth,
  async (request, response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Некоректные данные'
        })
      }

      const userId = request.params.id
      const {fullName, aboutMe, phone, place} = request.body


      await User.findOneAndUpdate({_id: userId}, {fullName, aboutMe, phone, place})

      response.json({message: 'Пользователь обновлен'})
    } catch (e) {
      response.status(500).json({message: 'Внутренняя ошибка сервера'})
    }
  })

module.exports = router