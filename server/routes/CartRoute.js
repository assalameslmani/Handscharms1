import express from 'express';
import {
    getAllCarts,
    getCartByID,
    addCart,
    updateCartByID,
    deleteCart,
    updateProductForUser,
    getCartByUserID,
} from '../controllers/CarController.js';

const router = express.Router();

router.get('/getAll', getAllCarts);
router.get('/get/:ID', getCartByID);
router.post('/add', addCart);
router.put('/update/:ID', updateCartByID);
router.delete('/delete/:ID', deleteCart);
router.put('/updateProduct/:userid', updateProductForUser);
router.get('/getByUserId/:useridd', getCartByUserID);

export default router;
