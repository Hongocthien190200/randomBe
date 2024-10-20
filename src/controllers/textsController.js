const Texts = require("../Models/Texts");

const textsController = {
  show: async (req, res) => {
    try {
      const texts = await Texts.find({});
      res.status(200).json(texts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  create: async (req, res) => {
    const {
      textname
    } = req.body;
    console.log(req.body)
    const text = new Texts({
      textname
    });
    try {
      const newText = await text.save();
      res.status(201).json(newText);
    } catch (error) {
      res.status(404).json(error);
    }
  },

  delete: async (req, res) => {
    try {
      await Texts.findByIdAndDelete(req.params.id);

      res.status(200).json({ message: 'Text deleted successfully' });
    } catch (error) {
      res.status(500).json(error);
    }
  },

};
module.exports = textsController;
