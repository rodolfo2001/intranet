import express from 'express'
import empleadosRoutes from './routes/empleados.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use(empleadosRoutes)

export default app; 