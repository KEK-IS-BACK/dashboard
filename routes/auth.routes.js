const {Router} = require('express')
const Profile = require('../models/Profile')
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

      const candidate = await Profile.findOne({email})

      if (candidate) {
        return response.status(400).json({message: 'Пользователь с таким Email уже существует'})
      }

      const hashedPassword = await bcrypt.hash(password, 12)

      const profile = new Profile({email, password: hashedPassword, fullName})

      await profile.save()

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

      const profile = await Profile.findOne({email})

      if (!profile) {
        return response.status(400).json({errors: [{msg: 'Пользователь с таким Email не найден'}]})
      }

      const isMatch = await bcrypt.compare(password, profile.password)

      if (!isMatch) {
        return response.status(400).json({message: 'Неверный пароль, попробуйте снова'})
      }

      const token = jwt.sign(
        {profileId: profile.id},
        config.get('jwtSecret'),
        {expiresIn: '12h'}
      )

      response.json({token, profileId: profile.id, fullName: profile.fullName})
    } catch (e) {
      response.status(500).json({message: 'Ошибка на сервере'})
    }
  })

module.exports = router