const express = require('express');
const {db} = require('../utils/db');

const clientRouter = express.Router();

clientRouter
    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: db.getAll(),
        })
    })
    .get('/:id', (req, res) => {

        const {id} = req.params

        res.render('client/one', {
            client: db.getOne(id)
        })
    })
    .post('/', (req, res) => {

    })
    .put('/:id', (req, res) => {

    })
    .delete('/:id', (req, res) => {

    })

module.exports = {
    clientRouter
}