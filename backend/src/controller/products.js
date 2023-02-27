import data from "../data.js";

class ProductController{

    async fetchProduct(req,res){
        try{
            res.send(data.products);
        }catch(err){
            console.log(err)
        }

    }

   async getProductById(req,res){
    const productId = req.params.id;
    try{
       
        const product = data.products.find(x => x._id === productId);
        if (product)
          res.send(product);
        else
          res.status(404).send({ msg: "Product Not Found." })
    }catch(err){

    }
   }
}

export default ProductController;