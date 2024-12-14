import express from 'express';
import multer from 'multer';
const upload = multer({ storage: multer.memoryStorage() });
import {
    addProduct,
    getAllProduct,
    deleteProduct,
    getProductById,
    UpdateProductById,
    filteredProduct
} from '../controllers/ProductController.js';

const router = express.Router();

router.post('/addProduct', upload.single('image'), addProduct);
router.get('/getAllProduct', getAllProduct);
router.get('/getProductById/:ID', getProductById);
router.put('/updateProduct/:ID', upload.single('image'), UpdateProductById);
router.get('/categories/:category', filteredProduct);
router.delete('/deleteProductById/:ID', deleteProduct);

export default router;
