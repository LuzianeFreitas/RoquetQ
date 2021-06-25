const Database = require('../db/config');

module.exports = {
    index(req, res){
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;

        console.log(`room = ${roomId}, question = ${questionId}, action = ${action}, password = ${password}`);

    },

    async create(req, res){
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        await db.run(`INSERT INTO questions(
            title,
            read,
            room
        )VALUES(
            "${question}",
            0,
            ${roomId}
        )`)

        res.redirect(`/room/${roomId}`)
    }
}