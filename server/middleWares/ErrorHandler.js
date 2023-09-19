class ApiError extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode
    }
}


const CreateCustomError = (message,statusCode) => {
    return new ApiError(message , statusCode)
}


const ErrorHandler =  (err,_req,res,_next) => {
    console.log(err);
    if(err instanceof ApiError) {
        res.status(err.statusCode).json({msg : err.message})
    }
    res.status(500).json({msg : 'something went wrong ! try again later' })
}




module.exports = {
    CreateCustomError,ErrorHandler
};
