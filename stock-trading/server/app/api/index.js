var api = {}

api.data = function (req, res) {

  res.json([
    { value: 200.5, amount: 2 },
    { value: 100.2, amount: 5 },
    { value: 50.5, amount: 1 },
    { value: 70.5, amount: 2 }
  ]);

};


module.exports = api;