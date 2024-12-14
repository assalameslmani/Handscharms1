import express from 'express';
import {
    addOrder,
    getAllOrders,
    getOrdersByUserId,
    setStatus,
    deleteAllDocuments
} from '../controllers/OrderController.js';

const router = express.Router();

router.post('/addOrder', addOrder);
router.get('/getAllOrders', getAllOrders);
router.get('/getOrdersByUserId/:id', getOrdersByUserId);
router.put('/setStatus/:id/', setStatus);
router.delete('/delete', deleteAllDocuments);

export default router;
