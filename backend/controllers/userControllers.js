//so basically this controller is the function the CRUD wants to perfom
// instead of having it in the routes folder, we create its own folder
//and then export it and call it in the routes folder

const signup = (req, res) => {
  res.status(200).json({ mssg: "get moves" });
};

const login = (req, res) => {
  res.status(200).json({ mssg: "post moves" });
};

module.exports = { signup, login };
