import express from 'express'
import { fetchUsers, fetchUser, insertUser, deleteUser, updateUser, loginUser } from '../controller/userController.js'
import { checkUser } from '../middleware/authenticate.js'

const router = express.Router()

router.post('/login', checkUser, loginUser)

router.get('/', fetchUsers)
router.post('/register', insertUser)

router.get('/:id', fetchUser)
router.delete('/delete/:id', deleteUser)
router.patch('/update/:id', updateUser)

export default router