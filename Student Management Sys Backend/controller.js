const users = [
    {
        id:1,
        name:'prasad'
    },
    {
        id:2,
        name:'kamin'
    },
];

const getAllUsers = (cb) => {
    cb(users);

};

const getUserById = (id, cb) => {
    const user = users.find(user => user.id == id);
    cb(user);
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;


