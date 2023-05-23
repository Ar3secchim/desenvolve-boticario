const db = require('../models')

class UsersController {
  static async pullAllUsers(req, res){
    try{
      const allUsers = await db.Users.findAll()
      return res.status(200).json(allUsers)
    }catch(error){
      return res.status(500).json(error.menssage)
    }
  }

  static async findOneUsers(req, res){
    const id = req.params.id
    try{
      const oneUsers = await db.Users.findOne({
        where: {id: Number(id)}
      })

      return res.status(200).json(oneUsers)
    }catch(error){
      return res.status(500).json(error.menssage)
    }
  }

  static async updateUsers(req, res){
    const dates = req.body
    const id = req.params.id

    try{
      await db.Users.update(dates, {where: {id: Number(id)}})
      const updateUsers =  await db.Users.findOne({
        where: {id: Number(id)}
      })
      return res.status(200).json(updateUsers)
    }catch(error){
      return res.status(500).json(error.menssage)
    }
  }

  static async createUsers(req, res){
    const dateUsers = req.body
    try{
      const newUsers = await db.Users.create(dateUsers)
      return res.status(201).json(newUsers)
    }catch(error){
      return res.status(500).json(error.menssage)
    }
  }

  static async deleteUsers(req, res){
    const id = req.params.id

    try{
      await db.Users.destroy({where: {id: Number(id)}})
      return res.status(200).json('ok, users delete')
    }catch(error){
      return res.status(500).json(error.menssage)
    }
  }
}

module.exports= UsersController
