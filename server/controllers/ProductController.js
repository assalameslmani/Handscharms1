import productModel from '../Models/ProductModel.js';
const addProduct = async (req, res) => {
    try {
      const imageURL = await imageUploader(req);

      const product = new productModel({
        price: req.body.price,
        name: req.body.name,
        category: req.body.category,
        discount: req.body.discount,
        image: imageURL,
        description: req.body.description,
        stock: req.body.stock,


      });
  
      const savedProduct = await product.save();
      
      res.status(200).json({
        code: 200,
        message: 'Product added successfully',
        data: savedPerfume
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        message: 'Product not added successfully',
        error: error.message
      });
    }
  };
  const getAllProduct = async (req, res) => {
    try {
      const product = await productModel.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Unable to get data',
        error: error,
      });
    }
  };
  const deleteProduct = async (req, res) => {
    try {
      const product = await productModel.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
        data:product,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: ' error occured while deleting the Product',
        error: error,
      });
    }
  };
  const getProductById = async (req, res) => {
    try {
      const product = await productModel.findById(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'product got successfully.',
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Unable to get product',
        error: error,
      });
    }
  };
  const UpdateProductById = async (req, res) => {
    try {
      const { ID } = req.params;
      const { price, name, category, discount, description, stock } = req.body;
  
      const updatedProductData = {
        price,
        name,
        category,
        discount,
        image: req.file ? req.file.path : undefined, 
        description,
        stock,
      };
  
      const updatedProject = await productModel.findOneAndUpdate(
        { _id: ID}, 
        { $set: updatedProductData },
        { new: true }
      );
  
      if (!updatedProject) {
        return res.status(404).json({
          success: false,
          message: "Project not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Project updated successfully.",
        data: updatedProject,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Unable to update project",
        error: error.message,
      });
    }
  };  

  const filteredProduct = async (req, res) => {
    try {
      const { category } = req.params;
      const filtered = await productModel.find({ category });
      res.status(200).json({
        success: true,
        message: `Product filtered by category: ${category}`,
        data: filtered,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error filtering product",
        error: error.message,
      });
    }
  };
  
  module.exports={addProduct,getAllProduct,deleteProduct,getProductById,UpdateProductById,filteredProduct}