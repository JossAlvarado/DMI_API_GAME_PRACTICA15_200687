import express from "express";
import playersRoutes from "./routes/playerRoutes.js"
const api = new express()

const port = 20068

api.use("/players", playersRoutes )
api.listen(port, () => {
    console.log(`El API ha sido iniciada y se encuentra por el puerto: ${port}`)
})