//so basically this controller is the function the CRUD wants to perfom
// instead of having it in the routes folder, we create its own folder
//and then export it and call it in the routes folder

const getMoves = (req, res) => {
  res.status(200).json({ mssg: "get moves" });
};

const postMoves = (req, res) => {
  res.status(200).json({ mssg: "post moves" });
};

const deleteMoves = (req, res) => {
  res.status(200).json({ mssg: "delete moves" });
};

const updateMoves = (req, res) => {
  res.status(200).json({ mssg: "update moves" });
};

module.exports = { getMoves, postMoves, deleteMoves, updateMoves };
