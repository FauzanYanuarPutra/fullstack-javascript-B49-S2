import { Request } from "express";
const db = require("../db/models");

class DistrictServices {
  body: Request['body']
  params: Request['params']

  constructor(req: Request) {
    this.body = req.body
    this.params = req.params
  }

  find = async () => {
    const districts = await db.districts.findAll()
    return districts
  }

  findById = async () => {
    const district = await db.districts.findOne({ where: { id: this.params.id } })
    return district
  }

  create = async () => {
    const {regency_id, name } = this.body
    const district = await db.districts.create({ regency_id, name })
    return district
  }

  findByIdAndUpdate = async () => {
    const { regency_id, name } = this.body;
    const district = await db.districts.update({ regency_id ,name }, { where: { id: this.params.id } });
    return district
  }

  findByIdAndDelete = async () => {
    const district = await db.districts.destroy({ where: { id: this.params.id } })
    return district
  }
}

export default DistrictServices