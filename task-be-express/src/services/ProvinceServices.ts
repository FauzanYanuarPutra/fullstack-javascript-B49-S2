import { Request } from "express";
const db = require("../db/models");

class ProvinceService {
  body: Request['body']
  params: Request['params']

  constructor(req: Request) {
    this.body = req.body
    this.params = req.params
  }

  find = async () => {
    const provinces = await db.provinces.findAll()
    return provinces
  }

  findById = async () => {
    const province = await db.provinces.findOne({ where: { id: this.params.id } })
    return province
  }

  create = async () => {
    const {name} = this.body
    const province = await db.provinces.create({ name })
    return province
  }

  findByIdAndUpdate = async () => {
    const { name } = this.body;
    const province = await db.provinces.update({ name }, { where: { id: this.params.id } });
    return province
  }

  findByIdAndDelete = async () => {
    const province = await db.provinces.destroy({ where: { id: this.params.id } })
    return province
  }
}

export default ProvinceService