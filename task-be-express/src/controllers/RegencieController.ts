import { Request, Response } from "express";
import IController from "./ControllerInterface";
import RegencieService from "../services/RegencieServices";

class RegencieController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const Service = new RegencieService(req)
      const data = await Service.find()

      if (!data.length) {
        return res.status(404).json({ message: "Not Found", data })
      }
      
      return res.json({ message: "Hello World Index province", data })
      
    } catch (err) {
      return res.status(500).json({ message: "Internal Server err", data: err })
    }
  }

  async show(req: Request, res:Response): Promise<Response> {
    try {
      const Service = new RegencieService(req)
      const data = await Service.findById()
      
      if (!data) {
        return res.status(404).json({ message: "Province Not Found", data })
      }
      
      return res.json({ message: "Hello World Show province", data })
      
    } catch (err) {
      return res.status(500).json({ message: "Internal Server err", data: err })
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const Service = new RegencieService(req)
      const data = await Service.create()
      
      return res.json({ message: "Hello World Create province", data })
    } catch (err) {
      return res.status(500).json({ message: "Internal Server err", data: err })
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    try {
      const Service = new RegencieService(req)
      const data = await Service.findByIdAndUpdate()

      if (data[0] === 0) {
        return res.status(404).json({ message: "Province Not Found" })
      }

      return res.json({ message: "Hello World Edit province", data })
    } catch (err) {
      return res.status(500).json({ message: "Internal Server err", data: err })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const Service = new RegencieService(req)
      const data = await Service.findByIdAndDelete()

      if (data === 0) {
        return res.status(404).json({ message: "Province Not Found" })
      }

      return res.json({ message: "Hello World Delete province", data })
    } catch (err) {
      return res.status(500).json({ message: "Internal Server err", data: err })
    }
  }
}

export default new RegencieController()