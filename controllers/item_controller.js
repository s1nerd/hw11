const { Item } = require("../models");

class ItemController {
  static async getAll(req, res, next) {
    try {
      const data = await Item.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req, res, next) {
    try {
    } catch (err) {}
  }

  static async create(req, res, next) {
    try {
    } catch (err) {}
  }

  static async update(req, res, next) {
    try {
    } catch (err) {}
  }

  static async delete(req, res, next) {
    try {
    } catch (err) {}
  }
}

module.exports = ItemController;
