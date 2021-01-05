const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const innerUser = require('../models/innerUser')

const router = Router()

// api/users/create
router.post(
  '/create',
  auth,
  async (require, response) => {
    try {
      const {fullName, aboutMe, phone, place} = require.body
      const {user} = require

      const candidate = new innerUser({fullName, aboutMe, phone, place, owner: user.userId})

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
    const {user} = require

    const innerUsers = await innerUser.find(
      {owner: user.userId},
      ['fullName', 'aboutMe', 'phone', 'place']
    )
    console.log(innerUsers)
    response.json([...innerUsers])
  } catch (e) {
    response.status(500).json({message: 'Внутренняя ошибка сервера'})
  }
})

// api/users/:id (delete запрос)
router.delete('/:id',
  auth,
  async (request, response) => {
    console.log(request.params.id)
    try {
      await innerUser.findByIdAndDelete(request.params.id)

      response.json({message: 'Пользователь удален'})
    } catch (e) {
      console.log('Зашел в catch')
      response.status(500).json({message: 'Внутренняя ошибка сервера'})
    }
  })

module.exports = router