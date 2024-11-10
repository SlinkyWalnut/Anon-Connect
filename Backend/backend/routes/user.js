
const express = require('express');
const router = express.Router();

const {
    getUsers,
    findUser,
    createUser,
    deleteUser,
    findUserByName
} = require('../controllers/user');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(findUser)
    .delete(deleteUser);

router.route('/findUsername/:id')
    .get(findUserByName);

module.exports = router;
