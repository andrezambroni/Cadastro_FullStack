import express from "express"

const app = express()

app.get("/usuarios", (req, res) => {
  res.send("ok, rota funcionando")
})


app.listen(3000)