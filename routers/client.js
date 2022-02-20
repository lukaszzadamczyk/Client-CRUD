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
        const {email, name, nextContactAt, notes} = req.body;

        const id = db.create({
            email,
            name,
            nextContactAt,
            notes
        })

        res.render('client/added',{
            name,
            id,
        })
    })
    .put('/:id', (req, res) => {

        const {id} = req.params;

        const {email, name, nextContactAt, notes} = req.body;

        db.update(id, {
            email,
            name,
            nextContactAt,
            notes,
        })

        res.render('client/update', {
            name,
            id
        })
    })
    .delete('/:id', (req, res) => {

        const {id} = req.params;

        db.delete(id);

        res.render('client/deleted')
    })
    .get('/form/add', (req, res) => {
        res.render('client/form/add');
    })
    .get('/form/edit/:id', (req, res) => {

        const {id} = req.params

        res.render('client/form/edit',{
            client: db.getOne(id),
        });
    })

module.exports = {
    clientRouter
}