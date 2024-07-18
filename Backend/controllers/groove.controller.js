const db = require('../db')
const classifyImageShape = require('../utils/classifyImageShape')

module.exports = {
  contactUs: async (req, res, next) => {
    try {
      const { date, name, email, phone, message } = req.body

      await db.contact.create({
        data: {
          name,
          email,
          phone: +phone,
          message,
          date,
        },
      })

      return res.status(200).json({
        message:
          'Succesfully Submit! Stay In the Loop with GrooveON exclusive Newsletter!',
      })
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({ message: 'Internal server error!', error })
    }
  },

  emailInfo: async (req, res, next) => {
    try {
      const { email } = req.body
      const existedEmail = await db.email.findFirst({
        where: {
          email,
        },
      })

      if (existedEmail) {
        return res.status(400).json({ message: 'Email already exists' })
      }

      await db.email.create({
        data: {
          email,
        },
      })

      return res.status(200).json({ message: 'Email created successfully' })
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({ message: 'Internal server error!', error })
    }
  },

  productRating: async (req, res, next) => {
    try {
      const { name, rating, comment } = req.body

      await db.review.create({
        data: {
          name,
          comment,
          rating: +rating,
        },
      })

      return res.status(200).json({ message: 'Review submit successfully' })
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({ message: 'Internal server error!', error })
    }
  },

  getAllReviews: async (req, res, next) => {
    try {
      const reviews = await db.review.findMany({
        where: {
          deleted: false,
        },
      })

      return res.status(200).json({ reviews })
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({ message: 'Internal server error!', error })
    }
  },

  uploadImageFile: async (req, res, next) => {
    try {
      const file = req.file

      // Classify the image to determine its type
      const imageType = await classifyImageShape(file.path)

      const imageUpdated = await db.recommendation.create({
        data: {
          File: {
            create: {
              mimeType: file?.mimetype,
              url: file?.path,
            },
          },
          type: imageType,
        },
      })

      return res.status(200).json({ imageUpdated })
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({ message: 'Internal server error!', error })
    }
  },
}
