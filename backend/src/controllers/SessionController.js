const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { id } = req.body
        console.log(id)

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()

        if (!ong) {
            return res.status(404).json({
                error: 'No ONG found with ID'
            })
        }
        return res.json(ong)
    }
}