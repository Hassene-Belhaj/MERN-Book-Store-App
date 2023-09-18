const Book = require('../Models/bookModel');
// const cloudinary = require('../cloudinary');




const getAllBooks = async (req , res) => {
 try {
  const resp = await Book.find({})
  res.status(200).json({success : true , data : resp}) 
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
        res.status(200).json({success : true , data : resp})

    } catch (error) {
       res.status(500).json({err : error})
    }
}

const postBook = async (req , res) => {
      const {title , author ,desc, publishYear,image} = req.body
    try {
            
         const resp = await Book.create({
            title , author ,desc, publishYear , image
        })
        res.status(201).json({success : true , response : resp})
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
      res.status(200).json({success : true , data : resp})    
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
    res.status(200).json({success : true , data : resp})
   } catch (error) {
    res.status(500).json({err : error})
   }
}

module.exports = {
    getAllBooks,getSingleBook,postBook,deleteBook,updateBook
};
