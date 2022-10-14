import { Router } from "express";
import { consultaEmpleado } from "../controllers/inde.controller.js";

const router = Router()

router.get('/ping', consultaEmpleado)

export default router