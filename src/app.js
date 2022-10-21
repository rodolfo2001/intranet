import express from 'express'
import empleadosRoutes from './routes/empleados.routes.js'
import indexRoutes from './routes/index.routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use(empleadosRoutes)

export default app; 