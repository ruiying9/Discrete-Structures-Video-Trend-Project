const db = require('../db');

const getAllUsers = async (req, res) => {
    try {
        const userSelect = 'SELECT * FROM User';
        const result = db.connection.query(userSelect);
        res.status(200).json({
            message: "OK"
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userSelect = 'SELECT * FROM User WHERE User_id = ?';
        const result = db.connection.query(userSelect, id);
        res.status(200).json({
            message: "OK"
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

const addUser = async (req, res) => {
    try {
        const {name, password, email} = req.body;
        const userCreate = 'INSERT INTO User (User_name, User_password, User_email) VALUES (?,?,?)';
        const result = db.connection.query(userCreate, [name, password, email]);

        const insertID = result.insertId;
        res.render('index');
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const {name, password, email} = req.body;
        const userUpdate = 'UPDATE User SET User_name = ?, User_password = ?, User_email = ? WHERE User_id = ?';
        const result = db.connection.query(userUpdate, [name, password, email, id]);
        res.status(200).json({
            message: "OK"
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userDelete = 'DELETE FROM User WHERE User_id = ?';
        const result = db.connection.query(userDelete, id);
        res.status(200).json({
            message: "OK"
        });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

module.exports = {getAllUsers, getUser, updateUser, addUser, deleteUser}