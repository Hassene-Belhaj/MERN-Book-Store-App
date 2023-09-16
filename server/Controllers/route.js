const Book = require('../Models/bookModel');


const uploadImage = async(req, res)=> {
    try {    
    const {image} = req.body    
    const resp = await Book.create({
        image : image
    })  
    res.status(201).json({image : resp})  
    } catch (error) {
        res.status(500).json({err : error})
    }
}


const getAllBooks = async (req , res) => {
 try {
  const resp = await Book.find({})
  res.status(200).json({data : resp}) 
} catch (error) {
    res.status(500).json({err : error})

 }
}

const getSingleBook = async (req ,res) => {
    try {
        const {id} = req.params
        const resp = await Book.findOne({_id : id})
        if(!resp) {
            return res.status(404).json({error : 'data can not be found'})
        }
        res.status(200).json({data : resp})

    } catch (error) {
       res.status(500).json({err : error})
    }
}

const postBook = async (req , res) => {
      const {title , author , publishYear} = req.body
    try {
        const resp = await Book.create({
            title , author , publishYear
        })
        res.status(201).json({response : resp})
    } catch (error) {
        res.status(500).json({err : error})
    }
}

const deleteBook = async (req, res) => {
     const {id} = req.params
    try {
      const resp = await Book.findOneAndDelete({_id : id})  
      if(!resp) {
        return res.status(404).json({error : 'Book does not exist'})
      }
      res.status(200).json({data : resp})    
    } catch (error) {
        res.status(500).json({err : error})
    }
}

const updateBook = async (req ,res) => {
   const {id} = req.params
   try {
    const resp = await Book.findOneAndUpdate({_id : id} , req.body , {
        new : true ,
        runValidators : true,
    } )
    res.status(200).json({data : resp})
   } catch (error) {
    res.status(500).json({err : error})
   }
}

module.exports = {
    getAllBooks,getSingleBook,postBook,deleteBook,updateBook,uploadImage
};
