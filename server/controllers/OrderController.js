import Order from '../Models/OrderModel.js';

const addOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOrdersByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    const orders = await Order.find({ 'User': userId });
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const setStatus = async (req, res) => {
    try {
        const orderId = req.params.id;
        const newStatus = req.body.status;
        const updatedOrder = await Order.findByIdAndUpdate(orderId, { $set: { 'status': newStatus } }, { new: true });
        
        if (!updatedOrder) {
          return res.status(404).json({ error: 'Order not found' });
        }
    
        res.status(200).json(updatedOrder);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};
const deleteAllDocuments = async (req, res) => {
  try {
    const result = await Order.deleteMany({});

    if (result.deletedCount > 0) {
      return res.status(200).json({ message: `Deleted ${result.deletedCount} documents from the collection.` });
    } else {
      return res.status(404).json({ message: 'No documents found to delete.' });
    }
  } catch (error) {
    console.error('Error deleting documents:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  addOrder,
  getAllOrders,
  getOrdersByUserId,
  setStatus,
  deleteAllDocuments,
};