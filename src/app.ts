import express, { Request, Response }  from "express";
import dataSource from "./dataSource";
import { error } from "console";
import Route from "./routes";

dataSource.initialize().then(async () => {
  const app = express()
  const port = 5000

  app.use(express.json())
  app.use('/api/v1', Route)

  app.get('/hello', (req: Request, res: Response) => {
      res.status(200).json({ data: "Success get data" })
  })

  app.listen(port, () => console.log(`Server succes on PORT ${port}`))
}).catch((error: any)=>{console.log(error)})