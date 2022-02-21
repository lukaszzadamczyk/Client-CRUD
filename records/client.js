const {ValidationError} = require("../utils/errors");

class Client {
    constructor(obj) {

        const {id, name, email, nextContactAt, notes} = obj;

        if (!id|| typeof id !== 'string'){
            throw new ValidationError('Id must be string.')
        }

        if (!name || typeof name !== 'string' || name.length < 3){
            throw new ValidationError('Name must be string, and must have more than 3 signs.')
        }

        if (!email || typeof email !== 'string' || email.indexOf('@') === -1){
            throw new ValidationError('Email is incorrect.')
        }

        if (typeof nextContactAt !== 'string'){
            throw new ValidationError('Next contact date must be string.')
        }

        if (typeof notes !== 'string'){
            throw new ValidationError('Notes must be string.')
        }

        this.id = id
        this.name = name;
        this.email = email;
        this.nextContactAt = nextContactAt;
        this.notes = notes;
    }
}

module.exports = {
    Client,
}