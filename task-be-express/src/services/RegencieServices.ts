import { Request } from "express";
const db = require("../db/models");

class RegencieService {
  body: Request['body']
  params: Request['params']

  constructor(req: Request) {
    this.body = req.body
    this.params = req.params
  }

  find = async () => {
    const regencies = await db.regencies.findAll({
      include: {
        model: db.provinces,
        attributes: ['name']
      }
    })
    return regencies
  }

  findById = async () => {
    const regencie = await db.regencies.findOne({ where: { id: this.params.id } })
    return regencie
  }

  create = async () => {
    const {province_id, name } = this.body
    const regencie = await db.regencies.create({ province_id, name })
    return regencie
  }

  findByIdAndUpdate = async () => {
    const { province_id, name } = this.body;
    const regencie = await db.regencies.update({ province_id ,name }, { where: { id: this.params.id } });
    return regencie
  }

  findByIdAndDelete = async () => {
    const regencie = await db.regencies.destroy({ where: { id: this.params.id } })
    return regencie
  }
}

export default RegencieService