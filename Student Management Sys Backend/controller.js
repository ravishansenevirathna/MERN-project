const User = require('./model');






const getAllUsers = (cb) => {
    cb(users);

};

const getUserById = (id, cb) => {
    const user = users.find(user => user.id == id);
    cb(user);
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;


