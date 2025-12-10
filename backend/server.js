import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.use(express.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body

  if (username === "example@mail.ru" && password === "qwerty") {
    return res.json({ token: "test-token-qwerty" })
  }

  return res.status(401).json({ error: "Неверные данные" })
})

app.listen(3000, () => {
  console.log("Backend запущен на http://localhost:3000")
})
