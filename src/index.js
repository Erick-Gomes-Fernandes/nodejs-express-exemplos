import * as express from 'express'

const app = express()

import userController from './controller/userController'
import postController from './controller/postController'

app.use('/user', userController)
app.use('/post', postController)

/*
  Usuario:
  Cadastro
  Login

  Posts:
  Criar posts
  Listar posts
*/

app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))