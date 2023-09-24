import { Request } from "express";
const db = require("../db/models");

class VillageService {
  body: Request['body']
  params: Request['params']

  constructor(req: Request) {
    this.body = req.body
    this.params = req.params
  }

  find = async () => {
    const villages = await db.villages.findAll()
    return villages
  }

  findById = async () => {
    const village = await db.villages.findOne({ where: { id: this.params.id } })
    return village
  }

  create = async () => {
    const {district_id, name } = this.body
    const village = await db.villages.create({ district_id, name })
    return village
  }

  findByIdAndUpdate = async () => {
    const { district_id, name } = this.body;
    const village = await db.villages.update({ district_id ,name }, { where: { id: this.params.id } });
    return village
  }

  findByIdAndDelete = async () => {
    const village = await db.villages.destroy({ where: { id: this.params.id } })
    return village
  }
}

export default VillageService