const NotFound = async (req,res) => {
    res.status(404).json({error : `cannot found this Address ${req.originalUrl}`})
}

module.exports = {
    NotFound
};
