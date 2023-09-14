const getAllBooks = async (req , res) => {
 res.status(200).json({response : 'get all books'})   
}

const getSingleBook = async (req ,res) => {
    res.status(200).json({response: 'get single Book'})
}

const postBook = async (req , res) => {
    res.status(201).json({response : 'book is created'})
}

const deleteBook = async (req, res) => {
    res.status(200).json({response : 'book is deleted ! '})
}

const updateBook = async (req ,res) => {
   res.status(200).json({response : 'book is updated'})
}

module.exports = {
    getAllBooks,getSingleBook,postBook,deleteBook,updateBook
};
