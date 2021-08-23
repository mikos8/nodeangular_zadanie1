module.exports.getAll = function (req, res) {
  res.status(200).json({
    getAll: "getAll category",
  });
};

module.exports.getById = function (req, res) {
  res.status(200).json({
    getById: "id getbyid",
  });
};
module.exports.remove = function (req, res) {
  res.status(200).json({});
};
module.exports.create = function (req, res) {
  res.status(200).json({});
};
module.exports.update = function (req, res) {
  res.status(200).json({});
};
