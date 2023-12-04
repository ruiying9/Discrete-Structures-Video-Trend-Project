const db = require('../db');

const getAllUsers = async (req, res) => {
    try {
        const userSelect = 'SELECT * FROM User';
        const result = await db.query(userSelect);
        res.json(result);
    } catch (err) {
        res.status(500).send('err');
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userSelect = 'SELECT * FROM User WHERE userID = ?';
        const result = await db.query(userSelect, id);
        res.json(result);
    } catch (err) {
        res.status(500).send('err');
    }
}

const addUser = async (req, res) => {
    try {
        const {name, password, email} = req.body;
        const userCreate = 'INSERT INTO User (userName, userPassword, userEmail) VALUES (?,?,?)';
        const result = await db.query(userCreate, [name, password, email]);

        const insertID = result.insertId;
        res.json({insertID: insertID});
    } catch (err) {
        res.status(500).send('err')
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const {name, password, email} = req.body;
        const userUpdate = 'UPDATE User SET userName = ?, userPassword = ?, userEmail = ? WHERE userID = ?';
        const result = await db.query(userUpdate, [name, password, email, id]);
        res.json(result);
    } catch (err) {
        res.status(500).send('err')
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userDelete = 'DELETE FROM User WHERE userID = ?';
        const result = await db.query(userDelete, id);
        res.json(result);
    } catch (err) {
        res.status(500).send('err')
    }
}

module.exports = {getAllUsers, getUser, updateUser, addUser, deleteUser}