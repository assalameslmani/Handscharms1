import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectedToDatabase from './config/config.js';
import userRoute from './routes/UserRoute.js';
import cartRoute from './routes/CartRoute.js';
import productRoute from './routes/ProductRoute.js';
import orderRoute from './routes/OrderRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use('/cart', cartRoute);
app.use('/product', productRoute);
app.use('/order', orderRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
    connectedToDatabase();
    console.log(`Server is running on port: ${PORT}`);
});
