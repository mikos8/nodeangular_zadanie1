module.exports.getAll = function (req, res) {
  res.status(200).json({
    order: "order get",
  });
};

module.exports.create = function (req, res) {
  res.status(200).json({
    order: "create post",
  });
};
