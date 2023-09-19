class customApiError extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const CreateCustomError = (message,statusCode) => {
    return new customApiError(message,statusCode)
}


const ErrorHandler = (err,req,res,next) => {
// console.log(err);
if(err instanceof customApiError) {
    return res.status(err.statusCode).json({msg : err.message})
}
 else if (err.name ==='CastError' && err.kind === 'objectId'){
        return res.status(404).json({msg : 'Resource notFound'}) 
    } 
return res.status(500).json({msg : 'something went wrong ! try again later'})
}


module.exports = {
    customApiError,CreateCustomError,ErrorHandler
};
