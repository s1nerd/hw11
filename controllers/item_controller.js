const { Item } = require("../models");

class ItemController {
  static async getAll(req, res, next) {
    try {
      const data = await Item.findAll({ where: { status: "active" } });

      if (!data) {
        throw { name: "Not Found" };
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req, res, next) {
    const { id } = req.params;
    try {
      const data = await Item.findByPk(id);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    const { name, status } = req.body;
    try {
      const data = await Item.create({ name, status });
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const { name, status } = req.body;
    try {
      const data = await Item.update({ name, status }, { where: { id } });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;
    try {
      await Item.update({ status: "inactive" }, { where: { id } });
      res.status(200).json({ message: "Item Deleted Successfully" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ItemController;
