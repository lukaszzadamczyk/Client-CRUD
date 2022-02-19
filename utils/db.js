const { readFile, writeFile } = require('fs').promises
const { join } = require('path');
const {v4: uuid} = require('uuid');

class Db {
    constructor(dbFileName) {
        this.dbFileName = join(__dirname, '../data', dbFileName);
        this._load();
    }

    async _load() {
        this._data = JSON.parse(await readFile(this.dbFileName, 'utf-8'));
    }

    _save(){
        writeFile(this.dbFileName, JSON.stringify(this._data), 'utf-8');
    }

    async create(obj){
        this._data.push({
            id: uuid(),
            ...obj
        });
        await this._save();
    }

    getOne(id){
        return this._data.find(obj => obj.id === id)
    }

    getAll(){
        return this._data;
    }

    update(id, newObj){
        this._data = this._data.map(oneObj => oneObj.id === id ? {...oneObj, ...newObj} : oneObj);
        this._save();
    }

    delete(id){
        this._data = this._data.filter(obj => obj.id !== id)
        this._save();
    }
}

const db = new Db('client.json');

module.exports = {
    db,
}