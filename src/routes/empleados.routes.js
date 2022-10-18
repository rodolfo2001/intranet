import { Router } from "express";
import {getEmpleados, getEmpleado, postEmpleados, patchEmpleados, deleteEmpleados} from '../controllers/empleados.controllers.js'


const router = Router()

router.get('/empleados', getEmpleados)
router.get('/empleados/:rut', getEmpleado)

router.post('/empleados', postEmpleados)

router.patch('/empleados/:rut', patchEmpleados)
router.delete('/empleados/:rut', deleteEmpleados)

export default router