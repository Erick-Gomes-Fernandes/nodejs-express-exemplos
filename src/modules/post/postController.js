import { Router } from 'express'
import { verifyAccessToken } from '../../utils/auth'

const router = Router()

router.post('/', verifyAccessToken, (req, res) => {
  res.send('CREATE POST /')
})

router.get('/:id?', (req, res) => {
  //DUAS OPÇÕES: LISTAR TODOS OU APENAS UM | ? no final da variável representa que ela é opcional
  res.send('GET POST /')
})
export default router