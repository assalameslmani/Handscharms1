import express from 'express';
import isAuthenticated from '../middleware/authenticated.js';
import {
    getuser,
    getUserById,
    register,
    login,
    updateUser,
    switchToAdmin,
    deleteUserById,
    
} from '../controllers/UserController.js';

const router = express.Router();

router.get('/getuser', getuser);
router.get('/getUserById/:id', getUserById);
router.post('/register', register);
router.post('/login', login);
router.put('/updateUser/:ID', isAuthenticated(['seller', 'admin']), updateUser);
router.put('/switchToAdmin/:ID', isAuthenticated(['admin']), switchToAdmin);
router.delete('/deleteUser/:ID', isAuthenticated(['admin']), deleteUserById);

export default router;
