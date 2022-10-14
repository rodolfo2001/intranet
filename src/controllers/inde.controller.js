import {pool} from '../db.js'

export const consultaEmpleado = async(req, res) => {
    const [colaboradores] = await pool.query('SELECT*FROM colaborador')
    res.json(colaboradores)
}