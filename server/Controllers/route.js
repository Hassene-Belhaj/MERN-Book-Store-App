const Book = require('../Models/bookModel');
const { AsyncWrapp } = require('../middleWares/AsyncWrapp');
const { CreateCustomError } = require('../middleWares/ErrorHandler');
// const cloudinary = require('../cloudinary');




const getAllBooks = AsyncWrapp(async (req , res) => {
  const resp = await Book.find({})
  res.status(200).json({success : true , data : resp}) 
})

const getSingleBook = AsyncWrapp( async (req ,res,next) => {
        const {id} = req.params
        const resp = await Book.findOne({_id : id})
        if(!resp) {
            return next(CreateCustomError(`no book with id : ${id}`,404))
        }
        res.status(200).json({success : true , data : resp})    
})

const postBook = AsyncWrapp( async (req , res) => {
      const {title , author ,desc, publishYear,image} = req.body
        const resp = await Book.create({
        title , author ,desc, publishYear , image
      })
    
       res.status(201).json({success : true , response : resp})
    
})

const deleteBook = AsyncWrapp(async (req, res,next) => {
    const {id} = req.params
    const resp = await Book.findOneAndDelete({_id : id})  
    if(!resp) {
    return next(CreateCustomError(`no book with id : ${id}`,404))
    }
    res.status(200).json({success : true , data : resp})    
})

const updateBook = AsyncWrapp(async (req ,res,next) => {
   const {id} = req.params
   
    const resp = await Book.findOneAndUpdate({_id : id} , req.body , {
        new : true ,
        runValidators : true,
    } )
    if(!resp){
        return next(CreateCustomError(`no book with id : ${id}`,404))
    }
    res.status(200).json({success : true , data : resp})
   
})

module.exports = {
    getAllBooks,getSingleBook,postBook,deleteBook,updateBook
};
