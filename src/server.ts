import express, { Request, Response } from 'express'

const app = express()


app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({message: 'Hello World'})
})

app.listen(process.env.PORT || 3333, () => {
  console.log('Server is running')
})