const {Router} = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {body, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

const router = Router()

// auth/registration
router.post(
  '/registration',
  [
    body('email', 'Введен некоректный Email').isEmail(),
    body('password', 'Минимальная длина пароля 6 символов').isLength({min: 6}),
    body('fullName', 'Введите ФИО').not().isEmpty().trim().escape(),
  ],
  async (request, response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Некоректные данные при регистрации'
        })
      }

      const {email, password, fullName} = request.body

      const candidate = await User.findOne({email})

      if (candidate) {
        return response.status(400).json({message: 'Пользователь с таким Email уже существует'})
      }

      const hashedPassword = await bcrypt.hash(password, 12)

      const user = new User({email, password: hashedPassword, fullName})

      await user.save()

      return response.status(201).json({message: 'Новый пользователь создан'})
    } catch (e) {
      response.status(500).json({message: 'Ошибка на сервере'})
    }
  })


// auth/login
router.post(
  '/login',
  [
    body('email', 'Введен некоректный Email').isEmail(),
    body('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
  ],
  async (request, response) => {
    try {
      const errors = validationResult(request)

      if (!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Некоректные данные при входе'
        })
      }

      const {email, password} = request.body

      const user = await User.findOne({email})

      if (!user) {
        return response.status(400).json({message: 'Пользователь с таким Email не найден'})
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return response.status(400).json({message: 'Неверный пароль, попробуйте снова'})
      }

      const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '1h'}
      )

      response.json({token, userId: user.id, fullName: user.fullName})
    } catch (e) {
      response.status(500).json({message: 'Ошибка на сервере'})
    }
  })

module.exports = router