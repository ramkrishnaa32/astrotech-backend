const Astrologer = require('../models/astrologer.model');

exports.getAllAstrologers = async (req, res) => {
  const astrologers = await Astrologer.find();
  res.json(astrologers);
};

exports.getAstrologerById = async (req, res) => {
  const astrologer = await Astrologer.findById(req.params.id);
  res.json(astrologer);
};
